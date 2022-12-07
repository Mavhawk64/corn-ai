from django.shortcuts import render
import json
from django.http import HttpResponse
 
def History(request,History_Id,Firebase_User_Id):

    ## all the parameters are provided above

    ## do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    ## do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")

 
def User(request,Firebase_User_Id,User_Email):
    print("user")
    ## all the parameters are provided above

    ## do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    ## do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")
 
def upHistory_Delete(request,Firebase_User_Id,History_Id):
    ## all the parameters are provided above

    ## do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    ## do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")
 
def upHistory_Insert(request,Firebase_User_Id,Image_Url,Is_Sick_Choice):
    ## all the parameters are provided above

    ## do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    ## do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")
 
def upHistory_Select(request,Firebase_User_Id,History_Id):
    ## all the parameters are provided above

    ## do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    ## do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")

def upHistory_Update(request,Firebase_User_Id,History_Id,Image_Url,Is_Sick_Choice,Is_Sick_Actual,Is_Sick_AI):
    ## all the parameters are provided above

    ## do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    ## do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")
  
def upUser_Delete(request,Firebase_User_Id):
    ## all the parameters are provided above

    ## do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    ## do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")
 
def upUser_Insert(request,Firebase_User_Id,User_Email):
    ## all the parameters are provided above

    ## do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    ## do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")
 
def upUser_Select(request,Firebase_User_Id):
    ## all the parameters are provided above

    ## do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    ## do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")
 
def upUser_Update(request,Firebase_User_Id,User_Email):
    ## all the parameters are provided above

    ## do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    ## do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")