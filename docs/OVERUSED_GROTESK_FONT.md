# Overused Grotesk Font Usage Guide

This project uses the Overused Grotesk font family throughout the application for body text, UI elements, and secondary content.

## Available Font Weights

The Overused Grotesk font family includes 16 weights and styles:

### Regular Weights

- `OverusedGrotesk-Light` - Light weight
- `OverusedGrotesk-Book` - Book weight (regular)
- `OverusedGrotesk-Roman` - Roman weight (standard)
- `OverusedGrotesk-Medium` - Medium weight
- `OverusedGrotesk-SemiBold` - Semi-bold weight
- `OverusedGrotesk-Bold` - Bold weight
- `OverusedGrotesk-ExtraBold` - Extra bold weight
- `OverusedGrotesk-Black` - Black weight (heaviest)

### Italic Weights

- `OverusedGrotesk-LightItalic` - Light italic
- `OverusedGrotesk-BookItalic` - Book italic
- `OverusedGrotesk-Italic` - Roman italic
- `OverusedGrotesk-MediumItalic` - Medium italic
- `OverusedGrotesk-SemiBoldItalic` - Semi-bold italic
- `OverusedGrotesk-BoldItalic` - Bold italic
- `OverusedGrotesk-ExtraBoldItalic` - Extra bold italic
- `OverusedGrotesk-BlackItalic` - Black italic

## Usage

### Using the OverusedGroteskText Component

The easiest way to use the Overused Grotesk font is through the custom `OverusedGroteskText` component:

```tsx
import { OverusedGroteskText } from '@/src/components';

// Basic usage (defaults to Roman weight)
<OverusedGroteskText>Hello World!</OverusedGroteskText>

// With custom weight and size
<OverusedGroteskText weight="bold" size={24}>
  Bold Title
</OverusedGroteskText>

// With custom styles
<OverusedGroteskText
  weight="medium"
  size={18}
  style={{ color: '#FFFAEB', textAlign: 'center' }}
>
  Styled Text
</OverusedGroteskText>
```

### Using Font Constants

You can also use the font family names directly in your styles:

```tsx
import { FONTS } from '@/src/constants';

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.overusedGrotesk.bold,
    fontSize: 24,
  },
  subtitle: {
    fontFamily: FONTS.overusedGrotesk.medium,
    fontSize: 18,
  },
  body: {
    fontFamily: FONTS.overusedGrotesk.roman,
    fontSize: 16,
  },
  caption: {
    fontFamily: FONTS.overusedGrotesk.light,
    fontSize: 14,
  },
});
```

### Available Font Weights

```tsx
FONTS.overusedGrotesk.light; // OverusedGrotesk-Light
FONTS.overusedGrotesk.lightItalic; // OverusedGrotesk-LightItalic
FONTS.overusedGrotesk.book; // OverusedGrotesk-Book
FONTS.overusedGrotesk.bookItalic; // OverusedGrotesk-BookItalic
FONTS.overusedGrotesk.roman; // OverusedGrotesk-Roman
FONTS.overusedGrotesk.italic; // OverusedGrotesk-Italic
FONTS.overusedGrotesk.medium; // OverusedGrotesk-Medium
FONTS.overusedGrotesk.mediumItalic; // OverusedGrotesk-MediumItalic
FONTS.overusedGrotesk.semiBold; // OverusedGrotesk-SemiBold
FONTS.overusedGrotesk.semiBoldItalic; // OverusedGrotesk-SemiBoldItalic
FONTS.overusedGrotesk.bold; // OverusedGrotesk-Bold
FONTS.overusedGrotesk.boldItalic; // OverusedGrotesk-BoldItalic
FONTS.overusedGrotesk.extraBold; // OverusedGrotesk-ExtraBold
FONTS.overusedGrotesk.extraBoldItalic; // OverusedGrotesk-ExtraBoldItalic
FONTS.overusedGrotesk.black; // OverusedGrotesk-Black
FONTS.overusedGrotesk.blackItalic; // OverusedGrotesk-BlackItalic
```

## OverusedGroteskText Component Props

| Prop       | Type                                                                                                                                                                                                                                  | Default     | Description         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------- |
| `weight`   | `'light' \| 'lightItalic' \| 'book' \| 'bookItalic' \| 'roman' \| 'italic' \| 'medium' \| 'mediumItalic' \| 'semiBold' \| 'semiBoldItalic' \| 'bold' \| 'boldItalic' \| 'extraBold' \| 'extraBoldItalic' \| 'black' \| 'blackItalic'` | `'roman'`   | Font weight         |
| `size`     | `number`                                                                                                                                                                                                                              | `16`        | Font size in pixels |
| `style`    | `TextStyle`                                                                                                                                                                                                                           | `undefined` | Additional styles   |
| `children` | `ReactNode`                                                                                                                                                                                                                           | -           | Text content        |

## Best Practices

1. **Hierarchy**: Use different weights to create visual hierarchy
   - `black` or `extraBold` for main headings
   - `bold` or `semiBold` for subheadings
   - `medium` or `roman` for body text
   - `light` for captions and secondary text

2. **Consistency**: Use the same font weight for similar UI elements

3. **Readability**: Ensure sufficient contrast and size for readability

4. **Performance**: The font is loaded once at app startup, so there's no performance impact

## Examples

### Headers and Titles

```tsx
<OverusedGroteskText weight="black" size={32}>
  Main Title
</OverusedGroteskText>

<OverusedGroteskText weight="bold" size={24}>
  Section Header
</OverusedGroteskText>
```

### Body Text

```tsx
<OverusedGroteskText weight="roman" size={16}>
  This is regular body text
</OverusedGroteskText>

<OverusedGroteskText weight="medium" size={14}>
  This is medium weight text
</OverusedGroteskText>
```

### UI Elements

```tsx
<OverusedGroteskText weight="semiBold" size={16} style={{ color: 'white' }}>
  Button Text
</OverusedGroteskText>

<OverusedGroteskText weight="light" size={12} style={{ opacity: 0.7 }}>
  Caption Text
</OverusedGroteskText>
```

### Italic Text

```tsx
<OverusedGroteskText weight="italic" size={16}>
  Emphasized text
</OverusedGroteskText>

<OverusedGroteskText weight="boldItalic" size={18}>
  Bold and italic text
</OverusedGroteskText>
```

## Font Loading

The Overused Grotesk font is automatically loaded when the app starts. The splash screen will remain visible until all fonts (including custom fonts) are loaded, ensuring a smooth user experience.

The font files are located in `assets/fonts/` and are bundled with the app for offline use.
