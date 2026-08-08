const authors = [
  "Shiyong Meng",
  "Bolei Chen",
  "Ping Zhong",
  "Yang Wan",
  "Rongzhi Wang",
  "Jiazhi Xia",
  "Jianxin Wang",
];

const s3d = [
  ["0.1 m", "15.0", "12.0"],
  ["0.5 m", "71.0", "65.2"],
  ["1.0 m", "79.1", "71.9"],
  ["1 m / 30°", "78.4", "71.4"],
];

const zind = [
  ["0.1 m", "11.5", "8.1"],
  ["0.5 m", "51.7", "43.6"],
  ["1.0 m", "63.2", "53.5"],
  ["1 m / 30°", "54.7", "50.2"],
];

const bibtex = `@article{meng2026cf2loc,
  title   = {From Uncertainty to Determinism: Coarse-to-Fine
             Visual Floorplan Localization without Ray Matching},
  author  = {Meng, Shiyong and Chen, Bolei and Zhong, Ping and
             Wan, Yang and Wang, Rongzhi and Xia, Jiazhi and Wang, Jianxin},
  year    = {2026}
}`;

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function MetricTable({
  title,
  rows,
}: {
  title: string;
  rows: string[][];
}) {
  return (
    <div className="metric-card">
      <div className="metric-head">
        <div>
          <span className="eyebrow">Benchmark</span>
          <h3>{title}</h3>
        </div>
        <span className="sota">SOTA</span>
      </div>
      <div className="metric-labels" aria-hidden="true">
        <span>Threshold</span>
        <span>CF²Loc</span>
        <span>Prev. best</span>
      </div>
      {rows.map(([threshold, ours, previous]) => (
        <div className="metric-row" key={threshold}>
          <span>{threshold}</span>
          <strong>{ours}%</strong>
          <span>{previous}%</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="CF2Loc home">
          <span className="mark-dot" />
          CF<sup>2</sup>Loc
        </a>
        <div className="nav-links">
          <a href="#method">Method</a>
          <a href="#results">Results</a>
          <a href="#citation">Citation</a>
        </div>
        <a
          className="nav-github"
          href="https://github.com/CSU-HERO-Lab/CF2Loc"
        >
          GitHub <ArrowIcon />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="paper-chip">
            <span className="pulse" />
            Visual Floorplan Localization · 2026
          </div>
          <h1>
            From uncertainty
            <br />
            to <em>determinism.</em>
          </h1>
          <p className="hero-subtitle">
            Coarse-to-fine visual floorplan localization
            <br className="desktop-break" /> without ray matching.
          </p>
          <div className="authors" aria-label="Authors">
            {authors.map((author, index) => (
              <span key={author}>
                {author}
                {index === 1 || index === 2 ? <sup>*</sup> : null}
              </span>
            ))}
          </div>
          <p className="affiliation">
            School of Computer Science and Engineering · Central South
            University
          </p>
          <div className="hero-actions">
            <a
              className="button primary"
              href="https://arxiv.org/html/2607.26817v2"
            >
              Read on arXiv <ArrowIcon />
            </a>
            <a
              className="button secondary"
              href="https://github.com/CSU-HERO-Lab/CF2Loc"
            >
              View code <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Animated coarse-to-fine localization concept">
          <div className="map-grid map-global">
            <span className="wall wall-a" />
            <span className="wall wall-b" />
            <span className="wall wall-c" />
            <span className="wall wall-d" />
            <span className="wall wall-e" />
          </div>
          <div className="uncertainty-ring ring-one" />
          <div className="uncertainty-ring ring-two" />
          <div className="particle p1" />
          <div className="particle p2" />
          <div className="particle p3" />
          <div className="particle p4" />
          <div className="particle p5" />
          <div className="particle p6" />
          <div className="particle p7" />
          <div className="particle p8" />
          <div className="flow-line line-one" />
          <div className="flow-line line-two" />
          <div className="flow-line line-three" />
          <div className="local-window">
            <span className="corner tl" />
            <span className="corner tr" />
            <span className="corner bl" />
            <span className="corner br" />
            <div className="target">
              <span />
            </div>
          </div>
          <div className="visual-label coarse">
            <span>01</span> Global pose diffusion
          </div>
          <div className="visual-label fine">
            <span>02</span> Local pose refinement
          </div>
          <div className="orientation-label">θ</div>
        </div>
      </section>

      <section className="ticker" aria-label="Method highlights">
        <div>
          <span>NO RAY MATCHING</span>
          <i />
          <span>MULTIMODAL POSE DIFFUSION</span>
          <i />
          <span>SUB-METER REFINEMENT</span>
          <i />
          <span>REAL-TIME INFERENCE</span>
        </div>
      </section>

      <section className="intro shell">
        <div className="section-index">01 / OVERVIEW</div>
        <div className="intro-body">
          <p className="lead">
            One image can correspond to many places.
            <br />
            CF²Loc preserves that ambiguity—then resolves it.
          </p>
          <div className="intro-columns">
            <p>
              Repetitive corridors and symmetric rooms make visual floorplan
              localization fundamentally multimodal. Existing systems compress
              visual evidence into sparse rays, introducing an information
              bottleneck before localization even begins.
            </p>
            <p>
              CF²Loc directly estimates the conditional pose distribution over
              the whole map. A generative global search tracks plausible
              hypotheses, then a lightweight local refiner delivers precise,
              deterministic corrections.
            </p>
          </div>
        </div>
      </section>

      <section className="contrast shell">
        <div className="contrast-card muted">
          <span className="contrast-number">A</span>
          <h3>Ray-based localization</h3>
          <p>Image → sparse ray prediction → exhaustive map matching</p>
          <div className="bottleneck">
            <span>Visual evidence</span>
            <i />
            <span>Information bottleneck</span>
          </div>
        </div>
        <div className="contrast-card active">
          <span className="contrast-number">B</span>
          <h3>Direct image-to-map</h3>
          <p>Image + floorplan → continuous multimodal pose distribution</p>
          <div className="mode-strip">
            <i />
            <i />
            <i />
            <i />
            <strong>Refine</strong>
          </div>
        </div>
      </section>

      <section className="method shell" id="method">
        <div className="section-heading">
          <div className="section-index">02 / METHOD</div>
          <h2>A clean division of labor.</h2>
          <p>
            Probabilistic where the map is ambiguous. Deterministic where
            precision matters.
          </p>
        </div>

        <div className="method-grid">
          <article className="method-card">
            <div className="method-topline">
              <span>Stage 01</span>
              <span>Global</span>
            </div>
            <div className="method-orbit global-orbit">
              <span className="orbit-center">p(p | I, M)</span>
              <i className="o1" />
              <i className="o2" />
              <i className="o3" />
              <i className="o4" />
            </div>
            <h3>Pose diffusion</h3>
            <p>
              Image-conditioned denoising routes stochastic pose particles
              toward distinct candidate modes across the full floorplan.
            </p>
            <ul>
              <li>Continuous SE(2) pose distribution</li>
              <li>Cross-modal image-to-map attention</li>
              <li>KDE-based mode extraction</li>
            </ul>
          </article>

          <article className="method-card">
            <div className="method-topline">
              <span>Stage 02</span>
              <span>Local</span>
            </div>
            <div className="method-orbit local-orbit">
              <div className="crop-map">
                <i />
                <i />
                <span className="mini-target" />
              </div>
              <span className="residual">Δx, Δy, Δθ</span>
            </div>
            <h3>Pose refinement</h3>
            <p>
              Candidate-centered 5 m × 5 m floorplan crops remove global
              ambiguity and enable bounded sub-meter residual correction.
            </p>
            <ul>
              <li>Orientation-canonicalized local crop</li>
              <li>Translation and heading residuals</li>
              <li>Confidence-based re-ranking</li>
            </ul>
          </article>
        </div>

        <figure className="paper-figure wide-figure">
          <img
            src="figures/pipeline.png"
            alt="CF2Loc training and inference pipeline"
          />
          <figcaption>
            <span>Figure 2</span>
            Training and inference workflow. The pose diffusion model first
            generates coarse candidates; the frozen global stage is then paired
            with a lightweight local refiner.
          </figcaption>
        </figure>
      </section>

      <section className="results" id="results">
        <div className="shell">
          <div className="section-heading light-heading">
            <div className="section-index">03 / RESULTS</div>
            <h2>State of the art, twice over.</h2>
            <p>
              Evaluated on synthetic furnished scenes and real-world homes,
              CF²Loc improves both strict accuracy and robust global recall.
            </p>
          </div>

          <div className="metrics-grid">
            <MetricTable title="S3D (full)" rows={s3d} />
            <MetricTable title="ZInD" rows={zind} />
          </div>

        </div>
      </section>

      <section className="takeaway shell">
        <div className="section-index">04 / TAKEAWAY</div>
        <blockquote>
          “Global ambiguity should be modeled,
          <br />
          not prematurely collapsed.”
        </blockquote>
        <div className="takeaway-note">
          <span />
          <p>
            CF²Loc bridges global multi-hypothesis tracking and local unimodal
            refinement in one rendering-free framework.
          </p>
        </div>
      </section>

      <section className="citation" id="citation">
        <div className="shell citation-inner">
          <div>
            <div className="section-index">05 / CITATION</div>
            <h2>Build on our work.</h2>
            <p>
              If CF²Loc supports your research, please cite the paper. Code and
              pretrained models will be released in this repository.
            </p>
            <div className="hero-actions">
              <a
                className="button primary"
                href="https://arxiv.org/html/2607.26817v2"
              >
                View on arXiv <ArrowIcon />
              </a>
              <a
                className="button secondary"
                href="https://github.com/CSU-HERO-Lab/CF2Loc"
              >
                GitHub repository <ArrowIcon />
              </a>
            </div>
          </div>
          <pre>
            <code>{bibtex}</code>
          </pre>
        </div>
      </section>

      <footer className="footer shell">
        <a className="wordmark" href="#top">
          <span className="mark-dot" />
          CF<sup>2</sup>Loc
        </a>
        <p>Central South University · 2026</p>
        <a href="mailto:boleichen@csu.edu.cn">
          Contact <ArrowIcon />
        </a>
      </footer>
    </main>
  );
}
