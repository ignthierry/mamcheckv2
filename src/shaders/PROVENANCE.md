# Provenance — ThreeUI WovenCloth (variant: washi)

Source registry: `https://threeui.com/source-code/woven-cloth.json` — component `woven-cloth`,
source revision `SHA-256 9bfd56ef7579` (the canonical `lumina-weavers-cloth.html` document).

All text below was written verbatim from the registry, then re-hashed on disk. Two of the
thirteen files carry the import-specifier edit described in "Build adaptations" — their
registry hash (before) and on-disk hash (after) are both given.

## From the woven-cloth bundle

| file | registry sha256 | on disk |
| --- | --- | --- |
| `src/shaders/woven-cloth/WovenCloth.tsx` | `5a89ff035bdf33dbc642d2916b56dbe94e89cb0af184474c139ffbfe5a720550` | edited — see below |
| `src/shaders/neuform-isolated/NeuformCraftEffects.tsx` | `0a1680c3c119dba8c61d946322afa0b64d36dfd80956fb5e7c3fd017d7bfa450` | edited — see below |
| `src/shaders/neuform-isolated/sources/lumina-weavers-cloth.html` | `9bfd56ef7579a92cb6385b3e93866bc3ff54fa4489a0febb9809b720e2946fb6` | identical |
| `src/shaders/woven-cloth/woven-cloth-washi.html` | `00e5971f139e5427e56a062c12d7e8e3590938b9a400753693b360d1e4d1a5c1` | identical |
| `src/shaders/woven-cloth/woven-cloth-atelier.html` | `f9be15756ff385db9cd3b7082b139d10b84a4eba0b3c4f19749b305570a7191f` | identical |
| `src/shaders/woven-cloth/woven-cloth-iridescent.html` | `e3b14adac39dfef04ed0bb0df99e86a1aa0aaf7cea4f8ecc4d5e0931b48bee7b` | identical |
| `src/shaders/threeui.css` | `efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf` | identical |

## From the public registry index

`NeuformCraftEffects.tsx` imports seven isolated documents, but the `woven-cloth` bundle
registers only one of them. The other six are registered on the components that own them, so
they were fetched from the same public index (`https://threeui.com/source-code.json`) and
checked against the hashes recorded there — nothing was recreated or approximated.

| file | sha256 | registered on |
| --- | --- | --- |
| `src/shaders/neuform-isolated/sources/aeonix-ember-storm.html` | `e3badd0308b52fb19e2d958f940cafe5d8ed00b7920c1d1a402da1f54dbbbe99` | `ember-storm` |
| `src/shaders/neuform-isolated/sources/aura-ui-fluid.html` | `ee863f4e015507af2748aa97be9e70c50dee81146213deac9b32370481af85d0` | `fluid-field` |
| `src/shaders/neuform-isolated/sources/glassblown-neon.html` | `1545c354af8d3917d85f93f25c5bcf2909ca96314c6cfbd06cf9b49ceeef1ba7` | `neon-sign`, `article-headings` |
| `src/shaders/neuform-isolated/sources/julian-vance-nebula.html` | `e4f3bda31a5c260356790add556a2ae59bb97ad6015a1f84cc6c9801b37e5a4d` | `nebula` |
| `src/shaders/neuform-isolated/sources/kinetic-lathe-certificate.html` | `dc48266f23df7fe6580eaf68cc0ad378bda6ed87abd71cdc972e2ec4dc768394` | `engraved-certificate` |
| `src/shaders/neuform-isolated/sources/nexus-unified-flow.html` | `fa1a015ae407dc2091c3c96239d28107e973cbc03aa7abef37dd5da791d5428b` | `predictive-arc`, `halftone-flow` |

## Build adaptations (authored content unchanged)

### 1. `?raw` imports → sibling string modules

Turbopack has no module type for `.html`, so each document also exists as a sibling
`<name>.source.ts` exporting the identical string. This is the same approach the published
`@designcodeio/threeui@1.2.0` build uses — it ships `.html.js` twins of the same documents.
The `.html` file stays the source of truth; regenerate the modules with:

```bash
node scripts/build-shader-sources.mjs
```

The only difference between the vendored `.tsx` files and the registry text is the import
specifier — verified by diff (10 changed lines, nothing else):

```diff
 src/shaders/woven-cloth/WovenCloth.tsx            register sha256 5a89ff03…  →  on disk 8a3cdead9103c4d7c7a0a4cc174a692b1c96703ecc0c43d797ce846a02888618
-import atelierSource from "./woven-cloth-atelier.html?raw";
-import iridescentSource from "./woven-cloth-iridescent.html?raw";
-import washiSource from "./woven-cloth-washi.html?raw";
+import atelierSource from "./woven-cloth-atelier.source";
+import iridescentSource from "./woven-cloth-iridescent.source";
+import washiSource from "./woven-cloth-washi.source";

 src/shaders/neuform-isolated/NeuformCraftEffects.tsx   register sha256 0a1680c3…  →  on disk e990c0d16a490f8fa85b71fb9fc60dd1efbb48169c1cc8b09516bab8e2122ffe
-import emberStormSource from "./sources/aeonix-ember-storm.html?raw";
-import fluidSource from "./sources/aura-ui-fluid.html?raw";
-import neonSource from "./sources/glassblown-neon.html?raw";
-import julianVanceNebulaSource from "./sources/julian-vance-nebula.html?raw";
-import engravedCertificateSource from "./sources/kinetic-lathe-certificate.html?raw";
-import luminaWeaversClothSource from "./sources/lumina-weavers-cloth.html?raw";
-import nexusUnifiedFlowSource from "./sources/nexus-unified-flow.html?raw";
+import emberStormSource from "./sources/aeonix-ember-storm.source";
+import fluidSource from "./sources/aura-ui-fluid.source";
+import neonSource from "./sources/glassblown-neon.source";
+import julianVanceNebulaSource from "./sources/julian-vance-nebula.source";
+import engravedCertificateSource from "./sources/kinetic-lathe-certificate.source";
+import luminaWeaversClothSource from "./sources/lumina-weavers-cloth.source";
+import nexusUnifiedFlowSource from "./sources/nexus-unified-flow.source";
```

### 2. Font

`threeui.css` declares `@font-face "ThreeUI Fragment Mono"` pointing at
`./fonts/fragment-mono.woff2` — a binary the registry hash-records but does not embed. The
same OFL typeface (Fragment Mono v6, latin subset) is installed at that path:
`src/shaders/fonts/fragment-mono.woff2`, sha256
`44c4e39bff5e76652a24a872cbebabccbcfb20f62c4633b27c1f2745cba86b56`.

## Integration

- `src/components/NorenBand.tsx` renders
  `<WovenCloth variant="washi" hue={0} saturation={1.00} brightness={1.00} />` inside the
  `.shader-frame` host from the documented usage, and imports `@/shaders/threeui.css`.
  The iframe is mounted by an `IntersectionObserver` (320 px margin) so the cloth simulation
  only exists once the band approaches the viewport.
- `src/app/page.tsx` places the band between `Momen` and `Faq`.
- `.shader-frame` lives in `src/app/globals.css` (the registry CSS does not ship that class).
- The washi document loads `three@0.160.0` from jsDelivr, exactly as authored.
