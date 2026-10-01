import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import {
  projectFilters,
  type Project,
  type ProjectFeature,
  type ProjectFilterId,
} from "../data/projects";

type ProjectGalleryProps = {
  projects: Project[];
};

type SortId = "newest" | "oldest" | "alpha";
type ViewId = "grid" | "list";

const PAGE_SIZE = 6;

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [filter, setFilter] = useState<ProjectFilterId>("all");
  const [sort, setSort] = useState<SortId>("newest");
  const [view, setView] = useState<ViewId>("grid");
  const [page, setPage] = useState(1);

  const active = projects.find((project) => project.slug === activeSlug) ?? null;

  const filtered = useMemo(() => {
    const list =
      filter === "all" ? projects : projects.filter((project) => project.kind === filter);

    return [...list].sort((a, b) => {
      if (sort === "alpha") return a.title.localeCompare(b.title);
      const yearDiff = Number(b.year) - Number(a.year);
      if (yearDiff !== 0) return sort === "newest" ? yearDiff : -yearDiff;
      return sort === "newest"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });
  }, [filter, projects, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  useEffect(() => {
    setPage(1);
  }, [filter, sort]);

  return (
    <>
      <div className="projects-toolbar panel">
        <span className="panel__corners" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
        <div className="projects-toolbar__inner">
          <div className="projects-filters" role="tablist" aria-label="Project filters">
            {projectFilters.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                className={`projects-filters__btn${filter === item.id ? " is-active" : ""}`}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="projects-toolbar__aside">
            <label className="projects-sort">
              <span>Sort by</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortId)}
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="alpha">A–Z</option>
              </select>
            </label>

            <div className="projects-view" role="group" aria-label="View mode">
              <button
                type="button"
                className={view === "grid" ? "is-active" : undefined}
                aria-pressed={view === "grid"}
                aria-label="Grid view"
                onClick={() => setView("grid")}
              >
                <GridIcon />
              </button>
              <button
                type="button"
                className={view === "list" ? "is-active" : undefined}
                aria-pressed={view === "list"}
                aria-label="List view"
                onClick={() => setView("list")}
              >
                <ListIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {pageItems.length > 0 ? (
        <div className={`projects-board projects-board--${view}`}>
          {pageItems.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              view={view}
              onOpen={() => setActiveSlug(project.slug)}
            />
          ))}
        </div>
      ) : (
        <p className="projects-empty">No projects in this category yet.</p>
      )}

      {filtered.length > 0 ? (
        <nav className="projects-pagination" aria-label="Projects pagination">
          <button
            type="button"
            aria-label="Previous page"
            disabled={currentPage <= 1}
            onClick={() => setPage((value) => Math.max(1, value - 1))}
          >
            <ChevronIcon direction="left" />
          </button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              type="button"
              className={number === currentPage ? "is-active" : undefined}
              aria-current={number === currentPage ? "page" : undefined}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          ))}
          <button
            type="button"
            aria-label="Next page"
            disabled={currentPage >= pageCount}
            onClick={() => setPage((value) => Math.min(pageCount, value + 1))}
          >
            <ChevronIcon direction="right" />
          </button>
        </nav>
      ) : null}

      {active ? (
        <ProjectModal project={active} onClose={() => setActiveSlug(null)} />
      ) : null}
    </>
  );
}

type ProjectCardProps = {
  project: Project;
  view: ViewId;
  onOpen: () => void;
};

function ProjectCard({ project, view, onOpen }: ProjectCardProps) {
  const cover = project.images[0] ?? "/images/projects-hero.jpg";

  function stopLink(event: ReactMouseEvent) {
    event.stopPropagation();
  }

  return (
    <article className={`panel projects-card projects-card--${view}`}>
      <span className="panel__corners" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </span>

      <button
        type="button"
        className="projects-card__media"
        onClick={onOpen}
        aria-label={`Open ${project.title}`}
      >
        <img src={cover} alt="" loading="lazy" />
        <span className="projects-card__year">{project.year}</span>
      </button>

      <div className="projects-card__body">
        <p className="projects-card__kicker">Project</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="projects-card__footer">
          <div className="projects-card__links">
            {project.href ? (
              <a href={project.href} target="_blank" rel="noreferrer" onClick={stopLink}>
                <ExternalIcon />
                Live Site
              </a>
            ) : null}
            {project.repo ? (
              <a href={project.repo} target="_blank" rel="noreferrer" onClick={stopLink}>
                <GithubIcon />
                GitHub
              </a>
            ) : null}
          </div>

          <button
            type="button"
            className="projects-card__open"
            aria-label={`View ${project.title} details`}
            aria-haspopup="dialog"
            onClick={onOpen}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </article>
  );
}

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [instant, setInstant] = useState(false);
  const images =
    project.images.length > 0 ? project.images : ["/images/projects-hero.jpg"];
  const count = images.length;

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
    const onChange = () => setReduceMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbarGap > 0) {
      document.body.style.paddingRight = `${scrollbarGap}px`;
    }
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mounted, onClose]);

  useEffect(() => {
    setIndex(0);
  }, [project.slug]);

  useEffect(() => {
    const track = thumbsRef.current;
    if (!track) return;
    const activeThumb = track.querySelector<HTMLElement>("[aria-selected='true']");
    activeThumb?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [index]);

  function moveTo(next: number) {
    const wraps =
      count > 1 &&
      ((index === count - 1 && next === 0) || (index === 0 && next === count - 1));

    if (wraps && !reduceMotion) {
      setInstant(true);
      setIndex(next);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setInstant(false));
      });
      return;
    }

    setIndex(next);
  }

  function go(delta: number) {
    moveTo((index + delta + count) % count);
  }

  function selectImage(next: number) {
    moveTo(next);
  }

  function onDialogKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
  }

  if (!mounted) return null;

  const trackStyle = {
    transform: `translate3d(-${index * 100}%, 0, 0)`,
    transition: reduceMotion || instant ? "none" : undefined,
  };

  return createPortal(
    <div
      className="project-modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="panel project-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onKeyDown={onDialogKeyDown}
      >
        <span className="panel__corners" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>

        <div className="project-modal__body">
          <header className="project-modal__top">
            <p className="project-modal__year">{project.year}</p>
            <button
              ref={closeRef}
              type="button"
              className="project-modal__close"
              onClick={onClose}
            >
              <span>Close</span>
              <span className="project-modal__close-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4 17.6 5 12 10.6z"
                  />
                </svg>
              </span>
            </button>
          </header>

          <div className="project-modal__hero">
            <div className="project-modal__copy">
              <h2 id={titleId} className="project-modal__title">
                {project.title}
              </h2>
              <p className="project-modal__category">{project.category}</p>
              <p className="project-modal__description">{project.description}</p>

              <div className="project-modal__stacks">
                <p className="panel-kicker">Tech stack</p>
                <ul className="project-stack">
                  {project.stack.map((item) => (
                    <li key={item.label} className="project-stack__item">
                      <span className="project-stack__inner">
                        <img src={item.icon} alt="" width={16} height={16} />
                        <span>{item.label}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-modal__gallery" aria-roledescription="carousel">
              <div className="project-modal__stage">
                <div className="project-modal__track" style={trackStyle}>
                  {images.map((src, i) => (
                    <figure
                      key={`${project.slug}-${src}-${i}`}
                      className="project-modal__slide"
                    >
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${i + 1} of ${count}`}
                      />
                    </figure>
                  ))}
                </div>
              </div>

              {count > 1 ? (
                <div className="project-thumbs">
                  <button
                    type="button"
                    className="project-thumbs__nav"
                    aria-label="Previous image"
                    onClick={() => go(-1)}
                  >
                    <ChevronIcon direction="left" />
                  </button>

                  <div
                    ref={thumbsRef}
                    className="project-thumbs__track"
                    role="tablist"
                    aria-label="Project images"
                  >
                    {images.map((src, i) => (
                      <button
                        key={`${src}-${i}`}
                        type="button"
                        role="tab"
                        aria-selected={i === index}
                        aria-label={`Show image ${i + 1}`}
                        className={`project-thumbs__item${i === index ? " is-active" : ""}`}
                        onClick={() => selectImage(i)}
                      >
                        <img src={src} alt="" />
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="project-thumbs__nav"
                    aria-label="Next image"
                    onClick={() => go(1)}
                  >
                    <ChevronIcon direction="right" />
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          {project.features.length > 0 ? (
            <ul className="project-features">
              {project.features.map((feature) => (
                <li key={feature.title} className="project-features__item">
                  <span className="project-features__icon" aria-hidden="true">
                    <FeatureIcon name={feature.icon} />
                  </span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}

          {(project.href || project.repo) && (
            <div className="project-modal__actions">
              {project.href ? (
                <a
                  className="button project-modal__btn project-modal__btn--ghost"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalIcon />
                  View live site
                </a>
              ) : null}
              {project.repo ? (
                <a
                  className="button project-modal__btn project-modal__btn--solid"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                  View on GitHub
                </a>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

function FeatureIcon({ name }: { name: ProjectFeature["icon"] }) {
  const icons: Record<ProjectFeature["icon"], ReactNode> = {
    doc: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          d="M7 3.8h7.2L19 8.6V20.2H7zM14.2 3.8v4.8H19"
        />
      </svg>
    ),
    layers: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          d="m12 4 8 4.2-8 4.2-8-4.2zm-8 7.3 8 4.2 8-4.2M4 15.8l8 4.2 8-4.2"
        />
      </svg>
    ),
    bolt: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M13.2 2.5 5.5 13.2h5.1L9.8 21.5l8.7-12.2h-5.2z" />
      </svg>
    ),
  };

  return icons[name];
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        d="M14 5h5v5M19 5 11 13M9 7H6.5A1.5 1.5 0 0 0 5 8.5v9A1.5 1.5 0 0 0 6.5 19h9a1.5 1.5 0 0 0 1.5-1.5V15"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        d="M5 12h12M13 6l6 6-6 6"
      />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      {direction === "left" ? (
        <path fill="currentColor" d="M14.7 5.3 8 12l6.7 6.7 1.4-1.4L10.8 12l5.3-5.3z" />
      ) : (
        <path fill="currentColor" d="m9.3 5.3-1.4 1.4L13.2 12l-5.3 5.3 1.4 1.4L16 12z" />
      )}
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z"
      />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
      />
    </svg>
  );
}
