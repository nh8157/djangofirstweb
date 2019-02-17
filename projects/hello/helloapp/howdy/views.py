from django.shortcuts import render
from django.views.generic import TemplateView
from .forms import PostForm

# Create your views here.
class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)

class AboutPageView(TemplateView):
    template_name = "index2.html"

class BuyersPageView(TemplateView):
    template_name = "index3.html"

def post_new(request):
    form = PostForm()
    return render(request, 'blog/post_edit.html', {'form':form})

