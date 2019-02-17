from django.conf.urls import url
from django.urls import path
from howdy import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view()),
    #url(r'^index2/$', views.AboutPageView.as_view()),
    url(r'^index3/$', views.BuyersPageView.as_view()),
    path('post/new/', views.post_new, name='post_new'),
]
