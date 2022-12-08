from django.shortcuts import render
import json
from django.http import HttpResponse


def History(request, History_Id, Firebase_User_Id):

    # all the parameters are provided above

    # do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    # do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")


def User(request, Firebase_User_Id, User_Email):
    # all the parameters are provided above

    # do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    # do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")


def upHistory_Delete(request, Firebase_User_Id, History_Id):
    # all the parameters are provided above

    # do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    # do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")


def upHistory_Insert(request, Firebase_User_Id, Image_Url, Is_Sick_Choice):
    # all the parameters are provided above

    # do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    # do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")


def upHistory_Select(request, Firebase_User_Id, History_Id):
    # all the parameters are provided above

    # do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    # do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")


def upHistory_Update(request, Firebase_User_Id, History_Id, Image_Url, Is_Sick_Choice, Is_Sick_Actual, Is_Sick_AI):
    # all the parameters are provided above

    # do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    # do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")


def upUser_Delete(request, Firebase_User_Id):
    # all the parameters are provided above

    # do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    # do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")


def upUser_Insert(request, Firebase_User_Id, User_Email):
    # all the parameters are provided above

    # do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    # do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")


def upUser_Select(request, Firebase_User_Id):
    # all the parameters are provided above

    # do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    # do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")


def upUser_Update(request, Firebase_User_Id, User_Email):
    # all the parameters are provided above

    # do you calculations here - START
    response_data = {}
    response_data['result'] = 'error'
    response_data['message'] = 'Some error message'
    # do you calculations here - END

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")


def uploadFile(request):

    # this is the image
    file = request.FILES['file']

    # ->

    # run your machine learning models here
    # do something with the image

    # ->

    # -> return a response
    response_data = {}
    response_data['result'] = 'Ok'
    response_data['message'] = 'We got the image but the functionality was not added'

    # Send back a response
    return HttpResponse(json.dumps(response_data), content_type="application/json")


def requestImage(request, currentIndex):

    data = """
{ 
   "data": [
      {
         "image": "DSC06878.JPG",
         "imageUrl": "https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/DSC06878.JPG",
         "sickAreaAI": {
            "x": 0.5842322707176208,
            "y": 0.7156354784965515,
            "w": -0.06843441724777222,
            "h": -0.2588661313056946
         },
         "sickAreasActual": [
            {
               "x": 0.4126666666666667,
               "y": 0.636,
               "w": -0.18666666666666668,
               "h": -0.57
            },
            {
               "x": 0.27666666666666667,
               "y": 0.42,
               "w": -0.09666666666666666,
               "h": -0.083
            },
            {
               "x": 0.15533333333333332,
               "y": 0.328,
               "w": -0.09066666666666667,
               "h": -0.097
            },
            {
               "x": 0.292,
               "y": 0.565,
               "w": -0.064,
               "h": -0.128
            },
            {
               "x": 0.94,
               "y": 0.66,
               "w": 0.051333333333333335,
               "h": -0.165
            },
            {
               "x": 0.9413333333333334,
               "y": 0.664,
               "w": 0.054,
               "h": -0.059
            },
            {
               "x": 0.828,
               "y": 0.825,
               "w": 0.10066666666666667,
               "h": -0.164
            },
            {
               "x": 0.918,
               "y": 0.837,
               "w": -0.10066666666666667,
               "h": 0.127
            },
            {
               "x": 0.354,
               "y": 0.911,
               "w": -0.07,
               "h": -0.134
            },
            {
               "x": 0.4766666666666667,
               "y": 0.208,
               "w": 0.03333333333333333,
               "h": 0.317
            },
            {
               "x": 0.5933333333333334,
               "y": 0.65,
               "w": -0.09666666666666666,
               "h": -0.192
            },
            {
               "x": 0.65,
               "y": 0.707,
               "w": 0.18933333333333333,
               "h": -0.075
            },
            {
               "x": 0.49,
               "y": 0.772,
               "w": -0.094,
               "h": -0.261
            }
         ]
      },
      {
         "image": "IMG_6616.Jpeg",
         "imageUrl": "https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/IMG_6616.Jpeg",
         "sickAreaAI": {
            "x": 0.5180870294570923,
            "y": 0.414231538772583,
            "w": -0.10826167464256287,
            "h": -0.12086635828018188
         },
         "sickAreasActual": [
            {
               "x": 0.683641975308642,
               "y": 0.4085648148148148,
               "w": -0.15123456790123457,
               "h": -0.24768518518518517
            },
            {
               "x": 0.7060185185185185,
               "y": 0.20949074074074073,
               "w": 0.005401234567901234,
               "h": -0.20949074074074073
            },
            {
               "x": 0.6797839506172839,
               "y": 0.13310185185185186,
               "w": -0.014660493827160493,
               "h": -0.13310185185185186
            },
            {
               "x": 0.4652777777777778,
               "y": 0.05324074074074074,
               "w": 0.007716049382716049,
               "h": -0.052083333333333336
            },
            {
               "x": 0.5401234567901234,
               "y": 0.059027777777777776,
               "w": -0.017746913580246913,
               "h": 0.12037037037037036
            },
            {
               "x": 0.7067901234567902,
               "y": 0.6458333333333334,
               "w": -0.08487654320987655,
               "h": -0.2835648148148148
            },
            {
               "x": 0.6280864197530864,
               "y": 0.36689814814814814,
               "w": -0.13194444444444445,
               "h": -0.18981481481481483
            },
            {
               "x": 0.6720679012345679,
               "y": 0.6631944444444444,
               "w": -0.10262345679012345,
               "h": -0.33217592592592593
            },
            {
               "x": 0.5987654320987654,
               "y": 0.5428240740740741,
               "w": -0.2808641975308642,
               "h": -0.5185185185185185
            },
            {
               "x": 0.5270061728395061,
               "y": 0.5798611111111112,
               "w": -0.12731481481481483,
               "h": 0.18287037037037038
            },
            {
               "x": 0.5046296296296297,
               "y": 0.38773148148148145,
               "w": -0.20679012345679013,
               "h": 0.21296296296296297
            },
            {
               "x": 0.19984567901234568,
               "y": 0.3738425925925926,
               "w": -0.12885802469135801,
               "h": -0.2951388888888889
            },
            {
               "x": 0.16358024691358025,
               "y": 0.3715277777777778,
               "w": -0.13503086419753085,
               "h": -0.29282407407407407
            },
            {
               "x": 0.45524691358024694,
               "y": 0.8078703703703703,
               "w": 0.010802469135802469,
               "h": 0.1886574074074074
            },
            {
               "x": 0.4166666666666667,
               "y": 0.8414351851851852,
               "w": 0.0030864197530864196,
               "h": 0.1574074074074074
            },
            {
               "x": 0.3873456790123457,
               "y": 0.8171296296296297,
               "w": 0.0038580246913580245,
               "h": 0.18171296296296297
            },
            {
               "x": 0.45447530864197533,
               "y": 0.004629629629629629,
               "w": -0.016975308641975308,
               "h": 0.125
            },
            {
               "x": 0.44907407407407407,
               "y": 0.1261574074074074,
               "w": -0.09104938271604938,
               "h": -0.0763888888888889
            },
            {
               "x": 0.12191358024691358,
               "y": 0.5520833333333334,
               "w": -0.12037037037037036,
               "h": -0.30439814814814814
            },
            {
               "x": 0.6921296296296297,
               "y": 0.36689814814814814,
               "w": 0.033179012345679014,
               "h": -0.024305555555555556
            },
            {
               "x": 0.7507716049382716,
               "y": 0.3472222222222222,
               "w": -0.033950617283950615,
               "h": 0.03587962962962963
            }
         ]
      },
      {
         "image": "DSC06542.JPG",
         "imageUrl": "https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/DSC06542.JPG",
         "sickAreaAI": {
            "x": 0.5285460352897644,
            "y": 0.5950930714607239,
            "w": 0.013661026954650879,
            "h": -0.08766895532608032
         },
         "sickAreasActual": [
            {
               "x": 0.6193333333333333,
               "y": 0.657,
               "w": -0.023333333333333334,
               "h": -0.256
            },
            {
               "x": 0.12533333333333332,
               "y": 0.876,
               "w": -0.086,
               "h": 0.094
            },
            {
               "x": 0.06533333333333333,
               "y": 0.895,
               "w": -0.03333333333333333,
               "h": 0.042
            },
            {
               "x": 0.18666666666666668,
               "y": 0.435,
               "w": -0.04066666666666666,
               "h": 0.191
            },
            {
               "x": 0.08666666666666667,
               "y": 0.835,
               "w": 0.06133333333333333,
               "h": -0.17
            },
            {
               "x": 0.14133333333333334,
               "y": 0.693,
               "w": 0.018666666666666668,
               "h": -0.136
            },
            {
               "x": 0.8993333333333333,
               "y": 0.09,
               "w": 0.07133333333333333,
               "h": 0.168
            },
            {
               "x": 0.6426666666666667,
               "y": 0.28,
               "w": 0.042,
               "h": -0.277
            },
            {
               "x": 0.558,
               "y": 0.009,
               "w": -0.034,
               "h": 0.529
            },
            {
               "x": 0.5293333333333333,
               "y": 0.853,
               "w": -0.0006666666666666666,
               "h": -0.429
            },
            {
               "x": 0.7006666666666667,
               "y": 0.561,
               "w": -0.008,
               "h": 0.259
            },
            {
               "x": 0.7566666666666667,
               "y": 0.602,
               "w": -0.002,
               "h": 0.128
            },
            {
               "x": 0.744,
               "y": 0.58,
               "w": -0.024666666666666667,
               "h": -0.175
            },
            {
               "x": 0.7673333333333333,
               "y": 0.451,
               "w": 0.05533333333333333,
               "h": 0.124
            },
            {
               "x": 0.8213333333333334,
               "y": 0.657,
               "w": -0.004,
               "h": -0.123
            }
         ]
      },
      {
         "image": "DSC00050.JPG",
         "imageUrl": "https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/DSC00050.JPG",
         "sickAreaAI": {
            "x": 0.6455707550048828,
            "y": 0.4720222055912018,
            "w": 0.034899353981018066,
            "h": 0.07940813899040222
         },
         "sickAreasActual": [
            {
               "x": 0.5526666666666666,
               "y": 0.414,
               "w": 0.11133333333333334,
               "h": 0.01
            },
            {
               "x": 0.6213333333333333,
               "y": 0.408,
               "w": 0.09266666666666666,
               "h": 0.059
            },
            {
               "x": 0.6906666666666667,
               "y": 0.437,
               "w": 0.042666666666666665,
               "h": 0.07
            },
            {
               "x": 0.42866666666666664,
               "y": 0.472,
               "w": 0.13733333333333334,
               "h": -0.032
            },
            {
               "x": 0.516,
               "y": 0.433,
               "w": 0.17333333333333334,
               "h": 0.048
            },
            {
               "x": 0.6573333333333333,
               "y": 0.461,
               "w": 0.074,
               "h": 0.101
            },
            {
               "x": 0.7453333333333333,
               "y": 0.672,
               "w": 0.018,
               "h": 0.115
            }
         ]
      },
      {
         "image": "DSC06568.JPG",
         "imageUrl": "https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/DSC06568.JPG",
         "sickAreaAI": {
            "x": 0.6680525541305542,
            "y": 0.32942306995391846,
            "w": -0.13766241073608398,
            "h": -0.10573670268058777
         },
         "sickAreasActual": [
            {
               "x": 0.696,
               "y": 0.286,
               "w": -0.18,
               "h": -0.204
            },
            {
               "x": 0.5426666666666666,
               "y": 0.122,
               "w": -0.07066666666666667,
               "h": -0.122
            },
            {
               "x": 0.37733333333333335,
               "y": 0.0,
               "w": 0.168,
               "h": 0.262
            },
            {
               "x": 0.7106666666666667,
               "y": 0.646,
               "w": -0.14533333333333334,
               "h": -0.36
            },
            {
               "x": 0.5946666666666667,
               "y": 0.336,
               "w": -0.08266666666666667,
               "h": -0.126
            }
         ]
      },
      {
         "image": "DSC00200.JPG",
         "imageUrl": "https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/DSC00200.JPG",
         "sickAreaAI": {
            "x": 0.6058104038238525,
            "y": 0.5927566289901733,
            "w": -0.032635509967803955,
            "h": 0.18628466129302979
         },
         "sickAreasActual": [
            {
               "x": 0.45066666666666666,
               "y": 0.418,
               "w": 0.064,
               "h": 0.566
            },
            {
               "x": 0.4706666666666667,
               "y": 0.35,
               "w": 0.092,
               "h": 0.622
            },
            {
               "x": 0.512,
               "y": 0.33,
               "w": 0.07866666666666666,
               "h": 0.568
            },
            {
               "x": 0.7466666666666667,
               "y": 0.125,
               "w": 0.08933333333333333,
               "h": 0.039
            },
            {
               "x": 0.484,
               "y": 0.138,
               "w": -0.025333333333333333,
               "h": -0.138
            },
            {
               "x": 0.644,
               "y": 0.882,
               "w": 0.012666666666666666,
               "h": 0.036
            },
            {
               "x": 0.666,
               "y": 0.939,
               "w": 0.004,
               "h": 0.024
            }
         ]
      },
      {
         "image": "DSC00161.JPG",
         "imageUrl": "https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/DSC00161.JPG",
         "sickAreaAI": {
            "x": 0.4480651319026947,
            "y": 0.4113651216030121,
            "w": 0.05504658818244934,
            "h": 0.052133798599243164
         },
         "sickAreasActual": [
            {
               "x": 0.5006666666666667,
               "y": 0.386,
               "w": 0.092,
               "h": 0.096
            },
            {
               "x": 0.5826666666666667,
               "y": 0.399,
               "w": 0.074,
               "h": 0.133
            },
            {
               "x": 0.6413333333333333,
               "y": 0.509,
               "w": 0.14333333333333334,
               "h": 0.201
            },
            {
               "x": 0.5853333333333334,
               "y": 0.484,
               "w": 0.16533333333333333,
               "h": 0.261
            },
            {
               "x": 0.7626666666666667,
               "y": 0.665,
               "w": 0.018666666666666668,
               "h": 0.238
            },
            {
               "x": 0.023333333333333334,
               "y": 0.177,
               "w": 0.098,
               "h": 0.074
            },
            {
               "x": 0.030666666666666665,
               "y": 0.202,
               "w": -0.029333333333333333,
               "h": -0.027
            },
            {
               "x": 0.43866666666666665,
               "y": 0.273,
               "w": -0.068,
               "h": -0.026
            },
            {
               "x": 0.352,
               "y": 0.325,
               "w": 0.14533333333333334,
               "h": 0.081
            },
            {
               "x": 0.4686666666666667,
               "y": 0.417,
               "w": 0.11266666666666666,
               "h": 0.11
            },
            {
               "x": 0.482,
               "y": 0.49,
               "w": 0.08133333333333333,
               "h": 0.024
            },
            {
               "x": 0.4266666666666667,
               "y": 0.328,
               "w": 0.10666666666666667,
               "h": 0.083
            }
         ]
      },
      {
         "image": "DSC03127.JPG",
         "imageUrl": "https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/DSC03127.JPG",
         "sickAreaAI": {
            "x": 0.4875926971435547,
            "y": 0.44698819518089294,
            "w": 0.11976069211959839,
            "h": 0.14604732394218445
         },
         "sickAreasActual": [
            {
               "x": 0.5033333333333333,
               "y": 0.455,
               "w": 0.23266666666666666,
               "h": 0.312
            },
            {
               "x": 0.234,
               "y": 0.185,
               "w": 0.29733333333333334,
               "h": 0.428
            },
            {
               "x": 0.498,
               "y": 0.189,
               "w": 0.032,
               "h": 0.177
            }
         ]
      },
      {
         "image": "DSC06465.JPG",
         "imageUrl": "https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/DSC06465.JPG",
         "sickAreaAI": {
            "x": 0.5926592946052551,
            "y": 0.35390445590019226,
            "w": -0.05890345573425293,
            "h": -0.17580029368400574
         },
         "sickAreasActual": [
            {
               "x": 0.53,
               "y": 0.242,
               "w": 0.028666666666666667,
               "h": 0.208
            },
            {
               "x": 0.49866666666666665,
               "y": 0.21,
               "w": 0.020666666666666667,
               "h": -0.176
            },
            {
               "x": 0.3873333333333333,
               "y": 0.385,
               "w": 0.042666666666666665,
               "h": -0.192
            },
            {
               "x": 0.3446666666666667,
               "y": 0.289,
               "w": -0.016,
               "h": -0.279
            },
            {
               "x": 0.10466666666666667,
               "y": 0.309,
               "w": -0.05533333333333333,
               "h": -0.308
            },
            {
               "x": 0.386,
               "y": 0.165,
               "w": 0.028666666666666667,
               "h": -0.143
            },
            {
               "x": 0.4786666666666667,
               "y": 0.067,
               "w": 0.0,
               "h": -0.036
            },
            {
               "x": 0.6606666666666666,
               "y": 0.199,
               "w": -0.006666666666666667,
               "h": -0.186
            },
            {
               "x": 0.20266666666666666,
               "y": 0.6,
               "w": 0.03,
               "h": 0.374
            },
            {
               "x": 0.32133333333333336,
               "y": 0.989,
               "w": 0.009333333333333334,
               "h": -0.208
            },
            {
               "x": 0.9273333333333333,
               "y": 0.763,
               "w": -0.04733333333333333,
               "h": -0.116
            },
            {
               "x": 0.964,
               "y": 0.164,
               "w": 0.034,
               "h": -0.073
            }
         ]
      },
      {
         "image": "DSC06465.JPG",
         "imageUrl": "https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/DSC06465.JPG",
         "sickAreaAI": {
            "x": 0.5926592946052551,
            "y": 0.35390445590019226,
            "w": -0.05890345573425293,
            "h": -0.17580029368400574
         },
         "sickAreasActual": [
            {
               "x": 0.53,
               "y": 0.242,
               "w": 0.028666666666666667,
               "h": 0.208
            },
            {
               "x": 0.49866666666666665,
               "y": 0.21,
               "w": 0.020666666666666667,
               "h": -0.176
            },
            {
               "x": 0.3873333333333333,
               "y": 0.385,
               "w": 0.042666666666666665,
               "h": -0.192
            },
            {
               "x": 0.3446666666666667,
               "y": 0.289,
               "w": -0.016,
               "h": -0.279
            },
            {
               "x": 0.10466666666666667,
               "y": 0.309,
               "w": -0.05533333333333333,
               "h": -0.308
            },
            {
               "x": 0.386,
               "y": 0.165,
               "w": 0.028666666666666667,
               "h": -0.143
            },
            {
               "x": 0.4786666666666667,
               "y": 0.067,
               "w": 0.0,
               "h": -0.036
            },
            {
               "x": 0.6606666666666666,
               "y": 0.199,
               "w": -0.006666666666666667,
               "h": -0.186
            },
            {
               "x": 0.20266666666666666,
               "y": 0.6,
               "w": 0.03,
               "h": 0.374
            },
            {
               "x": 0.32133333333333336,
               "y": 0.989,
               "w": 0.009333333333333334,
               "h": -0.208
            },
            {
               "x": 0.9273333333333333,
               "y": 0.763,
               "w": -0.04733333333333333,
               "h": -0.116
            },
            {
               "x": 0.964,
               "y": 0.164,
               "w": 0.034,
               "h": -0.073
            }
         ]
      }
   ]
}
"""
    data = json.loads(data)
    maxLength = len(data['data'])

    # Send back a response
    return HttpResponse(json.dumps(data['data'][currentIndex % maxLength]), content_type="application/json")
