---
description: JupyterLab Dash extension (only available by request)
---

# Dash

Dash is a powerful web based visualization tool for Python. By default, it runs a server on localhost so you can view dashboards on a web browser.

To use Dash inside of Jupyter Lab, you should use the `appViewer`method from `jupyterhub_dash.` This will open a tab in Jupyter Lab instead of serving the app to localhost. See example below:

```python
import jupyterlab_dash
import dash
import dash_html_components as html
import dash_core_components as dcc

viewer = jupyterlab_dash.AppViewer()

app = dash.Dash(__name__)

external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

app.layout = html.Div(children=[
    html.H1(children='Hello Dash'),

    html.Div(children='''
        Dash: A web application framework for Python.
    '''),

    dcc.Graph(
        id='example-graph',
        figure={
            'data': [
                {'x': [1, 2, 3], 'y': [4, 1, 2], 'type': 'bar', 'name': 'SF'},
                {'x': [1, 2, 3], 'y': [2, 4, 5], 'type': 'bar', 'name': u'Montréal'},
            ],
            'layout': {
                'title': 'Dash Data Visualization'
            }
        }
    )
])

viewer.show(app)
```
