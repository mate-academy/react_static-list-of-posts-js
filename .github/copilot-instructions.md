# GitHub Copilot Instructions

## Project Overview
This is a **Mate Academy** educational React project focused on component composition patterns. The goal is to transform hardcoded HTML markup into a reusable component hierarchy by extracting data from JSON files and rendering it through composable React components.

## Architecture Pattern: List/Info Component Pairs
The project follows a specific two-tier component pattern:

- **List components** (`PostList`, `CommentList`) - Take arrays of data, map over items, return one Info component per item
- **Info components** (`PostInfo`, `CommentInfo`, `UserInfo`) - Take a single data object, render its properties

Example from [App.jsx](src/App.jsx):
```jsx
// Target: <PostList posts={enrichedPosts} />
//   renders -> <PostInfo post={post} key={post.id} />
//     renders -> <UserInfo user={post.user} />
//     renders -> <CommentList comments={post.comments} />
//       renders -> <CommentInfo comment={comment} key={comment.id} />
```

## Data Preparation Required
Before rendering, enrich posts with relational data in [App.jsx](src/App.jsx):
- Import `postsFromServer`, `commentsFromServer`, `usersFromServer` from `src/api/*.json`
- Add `user` object to each post (match `post.userId` with `user.id`)
- Add `comments` array to each post (filter where `comment.postId === post.id`)

## Critical Conventions

### Component Structure
- Each component lives in `src/components/<ComponentName>/` with:
  - `<ComponentName>.jsx` - Component implementation
  - `<ComponentName>.scss` - Styles (extracted from App.scss)
  - `<ComponentName>.spec.jsx` - Cypress component tests
  - `index.js` - Named export only: `export * from './<ComponentName>';`

### React Keys (from [checklist.md](checklist.md))
**CRITICAL**: Add `key` prop to the root element *inside* `.map()`, not on the component wrapper:
```jsx
// ✅ CORRECT
<PostList posts={posts} />
// Inside PostList:
posts.map(post => <PostInfo post={post} key={post.id} />)

// ❌ WRONG - key on wrong element
posts.map(post => <div key={post.id}><PostInfo post={post} /></div>)
```
Never use array index as key.

### CSS Class Names (Test Requirement)
**DO NOT CHANGE** these class names - Cypress tests depend on them:
- `.PostInfo`, `.PostInfo__title`, `.PostInfo__header`, `.PostInfo__body`
- `.CommentInfo`, `.CommentInfo__name`, `.CommentInfo__email`, `.CommentInfo__body`, `.CommentInfo__title`
- `.CommentList`, `.PostList`
- `.UserInfo`
- `[data-cy="NoCommentsMessage"]` - Show when `comments.length === 0`

### Styling Migration
Move styles from [App.scss](src/App.scss) to component-specific SCSS files. Use BEM naming with `&` nesting:
```scss
.PostInfo {
  margin: 10px auto;
  
  &__title {
    margin: 0;
  }
  
  &__header {
    margin-bottom: 1em;
  }
}
```

## Development Workflow

### Running Tests
```bash
npm test              # Run Cypress tests (uses mate-scripts)
npm run lint          # Format + lint (runs style-format, format, lint-js, lint-css)
npm start             # Dev server with live reload
```

Tests check:
- Correct number of posts/comments rendered ([cypress/integration/page.spec.js](cypress/integration/page.spec.js))
- Proper data enrichment (users associated with posts)
- Component hierarchy and class names

### Code Style
- Uses **Prettier** for formatting (`npm run format`)
- ESLint with Airbnb config + Prettier integration
- SCSS linting with `@mate-academy/stylelint-config`
- Run `npm run lint` before committing

## Key Files to Reference
- [src/App.jsx](src/App.jsx) - Contains hardcoded markup showing final HTML structure
- [src/api/*.json](src/api/) - Data sources (posts, users, comments)
- [cypress/integration/page.spec.js](cypress/integration/page.spec.js) - Integration tests validating component behavior
- [src/components/*/*.spec.jsx](src/components/) - Component-level tests showing expected props

## Common Pitfalls
1. Forgetting to enrich posts with user/comments before passing to PostList
2. Adding keys to wrong element (outside the mapped component)
3. Changing CSS class names (breaks tests)
4. Keeping styles in App.scss instead of moving to component files
5. Using default exports instead of named exports in component index.js files
