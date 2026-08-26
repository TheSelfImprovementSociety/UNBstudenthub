# UNB Student Opportunity Hub

The website is the Student Opportunity Hub for The Self Improvement Society at UNB Saint John.

## Adding a new opportunity

Open `opportunities.json` and add a new object inside the main `[ ... ]` list.

Copy an existing object, then change:
- `title`
- `organization`
- `category`
- `location`
- `type`
- `description`
- `purpose`
- `link`

### Example

```json
{
  "title": "Example Course",
  "organization": "Example Organization",
  "category": "Courses",
  "location": "Online",
  "type": "Academic",
  "description": "Learn a useful new skill.",
  "purpose": "Develop your skills",
  "link": "https://example.com"
}
```

Use the existing categories where possible. If a new category is needed, add it to the data and it will automatically appear in the filter.
