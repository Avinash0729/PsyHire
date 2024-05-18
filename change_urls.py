from psyhire.utils import *
from company.models import *

def replace_strings(json_obj, search_str, replace_str):
    if isinstance(json_obj, dict):
        for key, value in json_obj.items():
            json_obj[key] = replace_strings(value, search_str, replace_str)
    elif isinstance(json_obj, list):
        for i, item in enumerate(json_obj):
            json_obj[i] = replace_strings(item, search_str, replace_str)
    elif isinstance(json_obj, str):
        # Perform the replacement in the string
        json_obj = json_obj.replace(search_str, replace_str)
    
    return json_obj

def replace_previous_urls():
    import json
    previous_urls = ["https://stgaptahrr.azureedge.net", "https://stgaptahr.blob.core.windows.net"]
    new_url = "https://stgaptahrr-fkepgsh6hdcchchb.a01.azurefd.net"
    print(1)
    companies = CompanyDetailModel.objects.all()
    print(2)
    for previous_url in previous_urls:
        for company in companies:
            mongo_client = get_mongo_client(company.id)
            db_name=mongo_client[str(company.id)]
            # databases = mongo_client.list_database_names()
            # for db in databases:
            collection_names=db_name.list_collection_names()
            for col in collection_names:
                collection = db_name[col]
                collections = collection.find({})
                for document in collections:
                    _id = document.pop("_id")
                    modified_json = replace_strings(document, previous_url, new_url)
                    collection.update_one({"_id" : _id},{"$set":modified_json})
                    print(company, col, _id)

replace_previous_urls()