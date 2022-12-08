from . import views
from django.urls import include, re_path

urlpatterns = [  

    # DONE
    re_path('history/(?P<History_Id>[\w\-]+)/(?P<Firebase_User_Id>[\w\-]+)', views.History),

    # DONE
    re_path('user/(?P<Firebase_User_Id>[\w\-]+)/(?P<User_Email>[\w\-]+)', views.User),

    # DONE
    re_path('upHistory_Delete/(?P<Firebase_User_Id>[\w\-]+)/(?P<History_Id>[\w\-]+)', views.upHistory_Delete),

    # DONE - UNIQUE
    re_path('upHistory_Insert/(?P<Firebase_User_Id>[\w\-]+)/(?P<Image_Url>[\w\-]+)/(?P<Is_Sick_Choice>[\w\-]+)', views.upHistory_Insert), 

    # DONE
    re_path('upHistory_Select/(?P<Firebase_User_Id>[\w\-]+)/(?P<History_Id>[\w\-]+)', views.upHistory_Select), 

    # DONE
    re_path('upHistory_Update/(?P<Firebase_User_Id>[\w\-]+)/(?P<History_Id>[\w\-]+)/(?P<Image_Url>[\w\-]+)/(?P<Is_Sick_Choice>[\w\-]+)/(?P<Is_Sick_Actual>[\w\-]+)/(?P<Is_Sick_AI>[\w\-]+)', views.upHistory_Update), 

    # DONE
    re_path('upUser_Delete/(?P<Firebase_User_Id>[\w\-]+)', views.upUser_Delete), 

    # DONE
    re_path('upUser_Insert/(?P<Firebase_User_Id>[\w\-]+)/(?P<User_Email>[\w\-]+)', views.upUser_Insert), 

    # DONE
    re_path('upUser_Select/(?P<Firebase_User_Id>[\w\-]+)', views.upUser_Select), 

    # DONE
    re_path('upUser_Update/(?P<Firebase_User_Id>[\w\-]+)/(?P<User_Email>[\w\-]+)', views.upUser_Update),

    # DONE
    re_path('uploadFile', views.uploadFile),

    # DONE
    re_path('requestImage/(?P<currentIndex>[\w\-]+)', views.requestImage),
]
 