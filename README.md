As mentioned on the requirement, I have implement token-based authentication for this project.

+ Elastic beanstalk endpoint:

image-filter-dev.eba-jwz6fcsn.us-east-1.elasticbeanstalk.com

+ Token for access (valid until Apr 30 2023, 23:59:59):

Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXNlcm5hbWUiLCJleHAiOjE2ODU0MDQ4MDB9.ujd5L9CxxsXPjsdthyQ73P1mKKt2wHezi1DCYp9crIk

+ Postman request:

curl --location 'http://image-filter-dev.eba-jwz6fcsn.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https%3A%2F%2Fanalyticsdrift.com%2Fwp-content%2Fuploads%2F2022%2F01%2FUdacity-Scholarship-Programming-Web-Development.jpg' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXNlcm5hbWUiLCJleHAiOjE2ODU0MDQ4MDB9.ujd5L9CxxsXPjsdthyQ73P1mKKt2wHezi1DCYp9crIk'