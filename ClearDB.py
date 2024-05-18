from pymongo import MongoClient
from decouple import config
from psyhire.settings import DEFAULT_MONGO_DATABASE
from psyhire.utils import *
from company.models import *

a=input("Delete local mongo? (yes/no)")
if a=="yes":
    companies = CompanyDetailModel.objects.all()
    for company in companies:
        mongo_client=get_mongo_client(company.id)
        try:
            mongo_client.drop_database(str(company.id))
        except:
            pass
        print("Done")
else:
    print("Cancelled")
