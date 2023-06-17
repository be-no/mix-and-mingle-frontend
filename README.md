# mix-and-mingle-frontend

### Description.
> Imagine spending an hour or more in front of a spreadsheet. You're tasked with randomly assigning a person within a group the size of a classroom (or bigger) to another person in the same group. You do this every week or so, on a regular basis. Knowing this, you could imagine how much time it takes for you to come up with different combinations, checking for no repeats of names, and accounting for an odd number in a group. Then can you imagine how much time you could save if there was a tool to do this work for you? With Mix & Mingle, you have it. Mix & Mingle is a random generator that takes in a mix of people and creates unique pairings to reduce time manually creating 1-on-1s.

### Link to your user stories - who are your users, what do they want, and why?
> User in description.
> GET new / POST create - User adds mix of people to mingle (form)
> GET index - User sees their mix(es)
> GET show - User clicks on specific mix to see all the mingles
> GET edit / PUT update - User edits name of a mix
> GET delete - User can delete a mix

### Link to your wireframes – sketches of major views / interfaces in your application.
> https://docs.google.com/presentation/d/1LK9oK0mw7ZgM7SPpKu_LM5O5yFfk-g9FyLriaTl6UbA/edit?usp=sharing

### Data Model
> class Output(Model):
    file_data = BlobField()
    name = CharField(default='output.xlsx')

### A list of the technologies used.
> React: Frontend UI
> Flask: Backend server
> PeeWee SQLite: Database
> Tailwind: CSS

### A list of installation steps for the app itself and any dependencies - how would another developer run your site locally?
> frontend and backend: npm i
> mix-and-mingle-frontend > web-app: npm start
> mix-and-mingle-backend: . venv/bin/activate               
> mix-and-mingle-backend: python3 app.py

### Descriptions of any unsolved problems or future features.
> Future features: user authentication, sharing document with other people
