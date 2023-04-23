# contrast-checker

### Background
An easy dynamic contrast checker done as a test for a group assignment where we were creating a chat and where users were assigned a random color when they're signing in.
Realised there must be a way to create dark or light textcolors dependable if the user were assigned a darker or lighter color, and there we go...

Learned a lot with this project!<br>
had no clue where to start, more than it should be possible, and
i really enjoy visuals and color thoery!
To learn more about this, basic color theory, together with existing formulas and to apply this in JavaScript functions and in a project, SO MUCH FUN!

### FLOW
When you choose a color, we get that color as a hex-value.
to decide whether a color is dark or light, we do have relative luminance, where black is darkest, 0, and white is lightest, 1.<br>
to calculate this we have this forumla:
```bash
    L = 0.2126 * R + 0.7152 * G + 0.0722 * B
```
from hex to RGB we have to get the red, green, blue.<br>
2 first digits in a hex-color represent red, the 2 in the middle green, and the last 2 represent blue, så we have to take these digits out and we also have to convert hexadecimal to integer!<br>

when we have converted hex to rgb we can continue calculate the luminance, and if the luminance is > 0.5, we should use dark colored text on that particular background, since it's more white (1) than black (0), or else, we should use light colored text, since background is more to 0, in other words, white.

### TECH STACK
VITE
Vanilla JS
Css

### DEVELOPMENT
it would be fun to apply WCAG's contrast values and give the user the possibilities to choose their own text color as well.
Next time :)