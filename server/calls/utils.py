import json

def getData(payload):
    '''
        payload: request.body
        return: dict
    '''
    data = {}
    for (key, value) in json.loads(payload.decode('utf-8')).items():
        data[key] = value
    return data
