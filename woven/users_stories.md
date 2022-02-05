# Implementing Tasks

When creating a new task the type of task should default to "todo."

## Section 1: Every task will the following properties:
- Title
- Description
- Primary Assignee (this will be an id of a user)
- Assigned by (this will be an id of a user)
- Priority (high, medium, low)
- Status (unstarted, in progess, completed, archived)
- Type (todo, meeting, phone call)

## Section 2: If task is meeting:
It will have the Section 1  properties as well as:

- Location

## Section 3: If task is phone call:
It will have the Section 1  properties .
It can also have any of the following properties:

- Phone Number
- Conference number
- Video conference URL
- Contact Information (would be a contact id, that we should use to show a contact show page)