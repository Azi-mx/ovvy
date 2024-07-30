# Task Documentation

## Task One: Dog Breed Quiz

### Brief Description
In this task, I created a "Guess the Dog Breed" quiz game using React. The game involves displaying a picture of a dog and providing four options for the breed, with only one correct answer. The application uses Zustand for state management to handle the different screens and game logic effectively. The user can navigate through a start screen, game screen, and result screen seamlessly, thanks to the organized state management provided by Zustand. The dog images and breed information are fetched from the Dog CEO API.

### Detailed Steps

1. **Setup and Initialization:**
   - Created a new React application.
   - Installed necessary dependencies including Zustand for state management.
   - Set up the project structure with components for the start screen, game screen, and result screen.

2. **Start Screen:**
   - Implemented a form for the user to enter their name.
   - Used Zustand to manage the state of the user's name and navigate to the game screen upon submission.

3. **Game Screen:**
   - Fetched random dog images and breed options from the Dog CEO API.
   - Displayed the dog image along with four breed options.
   - Implemented logic to handle the user's selection and update the score for correct answers.
   - Utilized Zustand to manage the game state, including the current score and the user's progress.

4. **Result Screen:**
   - Displayed the final score when the user selects a wrong answer.
   - Provided an option to restart the game, resetting the state using Zustand.

### Challenges Faced
The main challenge was handling the navigation between the different screens. Initially, managing the state transitions and ensuring smooth navigation took some time. However, Zustand's straightforward state management system helped simplify this process, allowing for efficient handling of the screen transitions and game logic.

## Task Two: Rhombus Shape with Angle Transformation

### Brief Description
In this task, I created an interactive rhombus shape with a vertical slider to control the angle transformation. The shape starts as a square and transforms into a rhombus, with angles increasing from 90° to 180° as the slider is moved. The shape finally appears as a straight line with one visible color when the slider is fully moved. The implementation ensures the shape transitions smoothly, showcasing the progressive angle change.

### Detailed Steps

1. **Setup and Initialization:**
   - Created a new React component for the rhombus shape.
   - Installed necessary libraries for handling the slider functionality.

2. **Initial Shape:**
   - Defined the initial shape as a square with two different colors on adjacent sides.
   - Used CSS for styling and positioning of the square.

3. **Slider Implementation:**
   - Added a vertical slider to control the angle transformation.
   - Implemented the logic to update the shape's angles based on the slider's value.

4. **Shape Transformation:**
   - Calculated the progressive angle change from 90° to 180° as the slider value changes.
   - Updated the CSS properties dynamically to reflect the angle changes and color transitions.

5. **Final Shape:**
   - Ensured the shape appears as a straight line with one color when the slider is fully moved.
   - Hid the other color edges to achieve the desired visual effect.

### Challenges Faced
One of the challenges was ensuring the smooth transformation of the shape from a square to a rhombus and then to a straight line. Achieving the correct CSS transformations and dynamically updating the angles required careful calculations and adjustments. Additionally, maintaining the visual consistency during the transformation process was crucial.

## Task Three: Drag and Drop Discs

### Brief Description
In this task, I created an interactive feature with two bins where users can create, drag, and drop discs between the bins. One bin allows users to create discs, and the other allows users to delete discs. The discs change color when transferred between bins, adding a visual indicator of their status. The Drag and Drop functionality was implemented using the DND kit library.

### Detailed Steps

1. **Setup and Initialization:**
   - Created a new React component for the bins and discs.
   - Installed the DND kit library for drag-and-drop functionality.

2. **Create Bin:**
   - Implemented a button to add discs to the create bin.
   - Styled the create bin and discs with appropriate colors.

3. **Delete Bin:**
   - Implemented a button to remove discs from the delete bin.
   - Styled the delete bin and discs to distinguish them from the create bin.

4. **Drag and Drop Functionality:**
   - Integrated the DND kit library to enable dragging and dropping of discs between the bins.
   - Implemented logic to handle the transfer of discs and update their color upon transfer.

5. **Visual Feedback:**
   - Ensured the discs change color when moved to a different bin, providing a clear visual indicator of their status.
   - Maintained consistency in the appearance of the bins and discs throughout the interaction.

### Challenges Faced
The primary challenge was implementing the drag-and-drop functionality smoothly. Ensuring that the discs updated their status and appearance correctly when transferred between bins required careful handling of state and visual updates. Additionally, integrating the DND kit library and customizing it to fit the specific requirements of the task took some time and experimentation.
