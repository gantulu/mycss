# Layout Architecture Requirements V1

Status: Recorded
Scope: Application root and page layout architecture
Repository: `gantulu/mycss`

## 1. Root DOM

- The application MUST have exactly one DOM root: `#root`.
- `AppShell` and `StandalonePage` MUST NOT be treated as separate DOM roots.
- Both layout components MUST render inside `#root`.

## 2. Root Container

The `#root` container MUST:

- Have `width: 100%` and `height: 100%`.
- Use `display: flex` and `flex-direction: column`.
- Have `max-width: 500px` and be horizontally centered.
- Use `overflow: hidden` to prevent the document/root from becoming the page scroll container.

## 3. Layout Components

### AppShell

- Represents the primary application layout.
- May contain shared application regions such as Header, Main, and Footer.
- The main content region MUST be the independently scrollable area.
- The main content region MUST use `flex: 1`, `min-height: 0`, and vertical scrolling.

### StandalonePage

- Represents an alternative page layout that does not use the AppShell structure.
- Is intended for standalone routes or pages that need a different composition.
- MUST render inside the same `#root`.
- MUST manage its own content layout and scrolling without making `#root` scrollable.

## 4. Layout Selection

- `AppShell` and `StandalonePage` MUST be mutually exclusive at the page-layout level.
- The active route/page MUST render either `AppShell` or `StandalonePage`, not both as sibling page layouts.
- Route selection may be handled by the application's router or an equivalent page-level switch.

## 5. Scroll Ownership

- The document and `#root` MUST NOT become the primary scroll containers.
- In `AppShell`, the Main region owns vertical scrolling.
- In `StandalonePage`, the page's designated content region owns vertical scrolling when needed.
- Flex children that contain scrollable content MUST be allowed to shrink (for example, with `min-height: 0`).

## 6. Existing Implementation Baseline

The current `src/styles/layout.css` already implements the root sizing, flex-column layout, 500px maximum width, root overflow clipping, and independently scrollable `main` region.

This requirements file records the intended architecture. It does not authorize or perform changes to the existing CSS implementation.

## 7. Acceptance Criteria

- There is exactly one `#root` DOM element.
- Both layout components, when used, are descendants of `#root`.
- Only one page-level layout component is active for a given route.
- AppShell content scrolls within its Main region.
- StandalonePage content scrolls within its own designated content region when necessary.
- The root/document does not become an unintended scroll container.
