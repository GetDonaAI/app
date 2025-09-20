# Handjet Font Usage Guide

This project uses the [Handjet font](https://fonts.google.com/specimen/Handjet) from Google Fonts throughout the application.

## Available Font Weights

The Handjet font family includes four weights:

- `Handjet_400Regular` - Regular weight
- `Handjet_500Medium` - Medium weight
- `Handjet_600SemiBold` - Semi-bold weight
- `Handjet_700Bold` - Bold weight

## Usage

### Using the HandjetText Component

The easiest way to use the Handjet font is through the custom `HandjetText` component:

```tsx
import { HandjetText } from '@/src/components';

// Basic usage
<HandjetText>Hello World!</HandjetText>

// With custom weight and size
<HandjetText weight="bold" size={24}>
  Bold Title
</HandjetText>

// With custom styles
<HandjetText
  weight="medium"
  size={18}
  style={{ color: '#007AFF', textAlign: 'center' }}
>
  Styled Text
</HandjetText>
```

### Using Font Constants

You can also use the font family names directly in your styles:

```tsx
import { FONTS } from '@/src/constants';

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.handjet.bold,
    fontSize: 24,
  },
  subtitle: {
    fontFamily: FONTS.handjet.medium,
    fontSize: 18,
  },
  body: {
    fontFamily: FONTS.handjet.regular,
    fontSize: 16,
  },
});
```

### Available Font Weights

```tsx
FONTS.handjet.regular; // Handjet_400Regular
FONTS.handjet.medium; // Handjet_500Medium
FONTS.handjet.semiBold; // Handjet_600SemiBold
FONTS.handjet.bold; // Handjet_700Bold
```

## HandjetText Component Props

| Prop       | Type                                            | Default     | Description         |
| ---------- | ----------------------------------------------- | ----------- | ------------------- |
| `weight`   | `'regular' \| 'medium' \| 'semiBold' \| 'bold'` | `'regular'` | Font weight         |
| `size`     | `number`                                        | `16`        | Font size in pixels |
| `style`    | `TextStyle`                                     | `undefined` | Additional styles   |
| `children` | `ReactNode`                                     | -           | Text content        |

## Best Practices

1. **Consistency**: Use the same font weight for similar UI elements
2. **Hierarchy**: Use different weights to create visual hierarchy
3. **Readability**: Ensure sufficient contrast and size for readability
4. **Performance**: The font is loaded once at app startup, so there's no performance impact

## Examples

### Headers and Titles

```tsx
<HandjetText weight="bold" size={32}>
  Main Title
</HandjetText>

<HandjetText weight="semiBold" size={24}>
  Section Header
</HandjetText>
```

### Body Text

```tsx
<HandjetText weight="regular" size={16}>
  This is regular body text
</HandjetText>

<HandjetText weight="medium" size={14}>
  This is medium weight text
</HandjetText>
```

### Buttons and Interactive Elements

```tsx
<HandjetText weight="semiBold" size={16} style={{ color: 'white' }}>
  Button Text
</HandjetText>
```

## Font Loading

The Handjet font is automatically loaded when the app starts. The splash screen will remain visible until all fonts are loaded, ensuring a smooth user experience.

If you need to check if fonts are loaded, you can use the `useFonts` hook:

```tsx
import { useFonts } from '@expo-google-fonts/handjet';

const [fontsLoaded] = useFonts({
  Handjet_400Regular,
  Handjet_500Medium,
  Handjet_600SemiBold,
  Handjet_700Bold,
});

if (!fontsLoaded) {
  return <LoadingScreen />;
}
```
