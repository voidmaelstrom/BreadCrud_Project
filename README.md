# breads

REST-Rant is an app where users can review restaurants.

## Routes for Breads
| Method |           Path           |                      Purpose                     |
|:------:|:------------------------:|:------------------------------------------------:|
|   GET  |             /            |                    Home Page                     |
|   GET  |          /breads         |                 Breads index page                |
|  POST  |          /breads         |                 Create new bread                 |
|   GET  |        /breads/new       |        Form page for creating a new bread        |
|   GET  |        /breads/:id       |         Details about a specific bread           |
|   PUT  |        /breads/:id       |             Update a specific bread              |
|   GET  |     /breads/:id/edit     |      Form page for editing an existing bread     |
| DELETE |        /breads/:id       |             Delete a specific bread              |
|   GET  |             *            |  404 page (matches any route not defined above)  |

## Routes for Bakers
| Method |           Path           |                      Purpose                     |
|:------:|:------------------------:|:------------------------------------------------:|
|   GET  |             /            |                    Home Page                     |
|   GET  |          /breads         |                Bakers with Breads                |
|   GET  |        /bakers/:id       |         Details about a specific baker           |
| DELETE |        /bakers/:id       |             Delete a specific baker              |
|   GET  |             *            |  404 page (matches any route not defined above)  |

## Database Fields Specific to Breads
|   Field  |    Type                          |
|:--------:|:--------------------------------:|
| name     | String                           |
| hasGluten| Boolean                          |
| image    | String                           |
| baker    | Reference ID from (parent) Baker |

## Database Fields Specific to Bakers
|   Field  |    Type   |
|:--------:|:---------:|
| name     | String    |
| startDate| Date      |
| bio      | String    |