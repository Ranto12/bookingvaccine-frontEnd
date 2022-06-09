# API Spec
## 1. Authentication Login Page
Request
- Method: POST
- Validation di MobileApp -> panjang string = 13 dan input = [0-9]
- Endpoint : `/api/v1/auth/login`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    "nik":"adminakun",
    "password":"123456"
}
```
Response
```
{
    "timestamp": "01-06-2022 21:26:33",
    "message": "Success!",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJwY_Zs",
        "username":"1871654852548",
        "password":"passwordAdmin",
        "firstName":"Jose",
        "lastName":"Mourinho",
        "birthDate": "1980-12-10",
        "gender":"Laki-laki",
        "email":"test@test.com",
        "noHandphone":"0721548484",
        "data" : {
          "id_health_facilities": 10,
          "name":"PUSKESMAS JATI"
        }
    }
}
```
## 1. Authentication Register Page
Request
- Method: POST
- Validation di MobileApp -> panjang string = 13 dan input = [0-9]
- Endpoint : `/api/v1/auth/login`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    "nik":"1871000000021",
    "password":"123456"
}
```
Response
```
{
    "timestamp": "01-06-2022 21:26:33",
    "message": "Success!",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJwY_Zs",
        "username":"1871654852548",
        "password":"passwordAdmin",
        "firstName":"Jose",
        "lastName":"Mourinho",
        "birthDate": "1980-12-10",
        "gender":"Laki-laki",
        "email":"test@test.com",
        "noHandphone":"0721548484",
    }
}
```
## 2. Dashboard Page
### Total Data Admin
Request
- Method: GET
- Endpoint : `/api/v1/dashboard/admin`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    
}
```
Response
```
{
    "timestamp": "01-06-2022 23:13:45",
    "message": "Success!",
    "data": {
        "id_admin": "200"
    }
}
```
### Total Data User
Request
- Method: GET
- Endpoint : `/api/v1/dashboard/user`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    
}
```
Response
```
{
    "timestamp": "01-06-2022 23:13:45",
    "message": "Success!",
    "data": {
        "id_user": "200"
    }
}
```
### Total Data Area (Kelurahan)
Request
- Method: GET
- Endpoint : `/api/v1/dashboard/area`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    
}
```
Response
```
{
    "timestamp": "01-06-2022 23:13:45",
    "message": "Success!",
    "data": {
        "id_area": "4"
    }
}
```
### Total Data RSUD
Request
- Method: GET
- Endpoint : `/api/v1/dashboard/category/rsud`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    
}
```
Response
```
{
    "timestamp": "01-06-2022 23:13:45",
    "message": "Success!",
    "data": {
        "id_category_facilities": "4"
    }
}
```
### Total Data Puskesmas
Request
- Method: GET
- Endpoint : `/api/v1/dashboard/category/puskesmas`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    
}
```
Response
```
{
    "timestamp": "01-06-2022 23:13:45",
    "message": "Success!",
    "data": {
        "id_category_facilities": "16"
    }
}
```
## 3. Data Booking
### Get All data booking and set value 15 data
Request
- Method: GET
- Endpoint : `/api/v1/bookingpage?pageSize=15`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    
}
```
Response
```
{
    "timestamp": "01-06-2022 23:13:45",
    "message": "Success!",
    "data": {
        // show all data in table
    }
}
```
### Get data base on pagination and sorting
Request
- Method: GET
- Endpoint : `/api/v1/bookingpage?pageSize=15&pageNo=1&sortBy=name`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    
}
```
Response
```
{
    "timestamp": "01-06-2022 23:13:45",
    "message": "Success!",
    "data": {
        // show data defined
    }
}
```
## 4. Schedule Vaccine Page (1)
### Get All data booking and set value 15 data
Request
- Method: GET
- Endpoint : `/api/v1/schedulevaccine?pageSize=15`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    
}
```
Response
```
{
    "timestamp": "01-06-2022 23:13:45",
    "message": "Success!",
    "data": {
        "facility":{
          "id_health_facilities":01,
          "name_health_facilities":"PUSKESMAS JATI"
        },
        "vaccine":{
          "id_vaccine":01,
          "name_vaccine":"SINOVAC"
        },
        "start_time":"08.00"
    }
    // pageable
}
```
### Get data base on pagination and sorting
Request
- Method: GET
- Endpoint : `/api/v1/bookingpage?pageSize=15&pageNo=1&sortBy=name`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    
}
```
Response
```
{
    "timestamp": "01-06-2022 23:13:45",
    "message": "Success!",
    "data": {
        "facility":{
          "id_health_facilities":01,
          "name_health_facilities":"PUSKESMAS JATI"
        },
        "vaccine":{
          "id_vaccine":01,
          "name_vaccine":"SINOVAC"
        },
        "start_time":"08.00"
    }
    // pagebale
    // sorting
}
```
### Delete schedule / data sesion vaccine by Id
Request
- Method: DELETE
- Endpoint : `/api/v1/schedulevaccine/id`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    
}
```
Response
```
{

}
```
## 5. Schedule Vaccine Page detail (2)
### Create New Data Schedule Vaccine
Request
- Method: POST
- Endpoint : `/api/v1/schedulevaccine
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    "id_session":"001",
    "data": {
      "id_health_facilties": 1,
      "name_health_facilties":"PUSKESMAS JATI",
      "category": {
         "id_category":"01",
         "name_category":"PUSKESMAS"
      },
      "area": {
         "id_area":"01",
         "name_area":"Keluarahan JATI"}
      },
      "address_health_facilities":"JL Jakabaring",
      "link_location":"https://goo.gl/maps/YQH25RZHMmqgsQGF8",
      "img_facilities": "data"
    }
    "vaccine": {
       "id_vaccine":"01",
       "name_vaccine":"SINOVAC",
       "Stock":200
    },
    "start_time": "08.00",
    "end_time":"12.00",
    "limit":"150"
}
```
Response
```
{
    "name_health_facilities":"Puskesmas Gading",
    "category_facilities":"Puskesmas",
    "name_vaccine":"Sinovac",
    "stock":100,
    "start_time": "08.00",
    "end_time":"12.00",
    "address_health_facilities":"JL Jakabaring",
    "link_location":"https://goo.gl/maps/YQH25RZHMmqgsQGF8",
    "img_facilities": "data"
}
```
### Edit Data Schedule Vaccine
Request
- Method: PUT
- Endpoint : `/api/v1/schedulevaccine/id
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    "name_health_facilities":"Puskesmas Gading",
    "category_facilities":"Puskesmas",
    "name_vaccine":"Sinovac",
    "stock":100,
    "start_time": "08.00",
    "end_time":"12.00",
    "address_health_facilities":"JL Jakabaring",
    "link_location":"https://goo.gl/maps/YQH25RZHMmqgsQGF8",
    "img_facilities": "filedata"
}
```
Response
```
{
    "name_health_facilities":"Puskesmas Gading",
    "category_facilities":"Puskesmas",
    "name_vaccine":"Sinovac",
    "stock":100,
    "start_time": "08.00",
    "end_time":"12.00",
    "address_health_facilities":"JL Jakabaring",
    "link_location":"https://goo.gl/maps/YQH25RZHMmqgsQGF8",
    "img_facilities": "filedata"
}
```
## 6. Article News
### Get All Article News and set value 15 data
Request
- Method: GET
- Endpoint : `/api/v1/article?pageSize=15`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    
}
```
Response
```
{
    "timestamp": "01-06-2022 23:13:45",
    "message": "Success!",
    "data": {
        // show all data in table
    }
}
```
### Get data base on pagination and sorting
Request
- Method: GET
- Endpoint : `/api/v1/article?pageSize=15&pageNo=1&sortBy=name`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    
}
```
Response
```
{
    "timestamp": "01-06-2022 23:13:45",
    "message": "Success!",
    "data": {
        // show data defined
    }
}
```
### Delete article by Id
Request
- Method: DELETE
- Endpoint : `/api/v1/article/id`
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    
}
```
Response
```
{

}
```
## 7. Article News Page detail (2)
### Create New Data Article News
Request
- Method: POST
- Endpoint : `/api/v1/article
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    "title":"Pentingnya vaksin sebelum keluar rumah",
    "Author":"Admin",
    "iamge_aticle":"filedata",
    "body_content":"string unlimited",
}
```
Response
```
{
    "title":"Pentingnya vaksin sebelum keluar rumah",
    "Author":"Admin",
    "iamge_aticle":"filedata",
    "body_content":"string unlimited",
}
```
### Edit Data Schedule Vaccine
Request
- Method: PUT
- Endpoint : `/api/v1/article/id
- Header : 
  - Content-Type: application/json
  - Accept: application/json
- body
```
{
    "title":"Pentingnya vaksin sebelum keluar rumah",
    "Author":"Admin",
    "iamge_aticle":"filedata",
    "body_content":"string unlimited",
}
```
Response
```
{
    "title":"Pentingnya vaksin sebelum keluar rumah",
    "Author":"Admin",
    "iamge_aticle":"filedata",
    "body_content":"string unlimited",
}
```
