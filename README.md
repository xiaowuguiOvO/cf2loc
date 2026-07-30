# CF²Loc

Official project page for **“From Uncertainty to Determinism: Coarse-to-Fine
Visual Floorplan Localization without Ray Matching.”**

CF²Loc formulates visual floorplan localization as direct conditional pose
distribution estimation. It combines image-conditioned global pose diffusion
with candidate-centered local refinement, avoiding ray prediction, offline map
preprocessing, lookup tables, and exhaustive test-time matching.

## Project page

**https://xiaowuguiOvO.github.io/cf2loc-project-page/**

## Highlights

- Directly models continuous multimodal camera pose distributions.
- Uses global diffusion sampling for robust multi-hypothesis tracking.
- Refines candidate poses with oriented 5 m × 5 m local floorplan crops.
- Establishes state-of-the-art results on S3D (full) and ZInD.
- Supports real-time inference without ray matching.

## Local development

```bash
npm install
npm run dev
```

The GitHub Pages deployment runs automatically from `main`.

## Authors

Shiyong Meng, Bolei Chen, Ping Zhong, Yang Wan, Rongzhi Wang, Jiazhi Xia, and
Jianxin Wang — School of Computer Science and Engineering, Central South
University.

## Citation

```bibtex
@article{meng2026cf2loc,
  title   = {From Uncertainty to Determinism: Coarse-to-Fine
             Visual Floorplan Localization without Ray Matching},
  author  = {Meng, Shiyong and Chen, Bolei and Zhong, Ping and
             Wan, Yang and Wang, Rongzhi and Xia, Jiazhi and Wang, Jianxin},
  year    = {2026}
}
```
