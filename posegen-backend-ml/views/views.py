from flask import jsonify, request
import numpy as np
import tensorflow as tf
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

from app import *

import requests
from PIL import Image
import io
import base64

modelURL = "http://localhost:7860/"

def d_base64_image(encoding):
    if(encoding.startswith("data:image/")):
        encoding = encoding.split(";")[1].split(',')[1]
    image = Image.open(io.BytesIO(base64.b64decode(encoding)))
    return image

def e_image_base64(image):
    with io.BytesIO() as output_bytes:
        image.save(output_bytes, format="PNG")
        bytes_data = output_bytes.getvalue()
    return base64.b64encode(bytes_data).decode('utf-8')

@app.route('/segmentation', methods = ['POST'])
def segmentation():
    image = request.json['img']
    image = d_base64_image(image)
    image = image.resize((512, 512))

    image = e_image_base64(image)

    poseData = {
        "init_images":[image],
        "prompt" : "",
        "sampler_name" : "DPM++ 2M Karras",
        "batch_size": 1,
        "steps" : 30,
        "cfg_scale": 7.5,
        "width": 480,
        "height": 620,
        "negative_prompt": "",
        "alwayson_scripts":{
            "controlnet":{
                "args":[{
                    "input_image" : image,
                    "module": "openpose",
                    "model": "control_v11p_sd15_openpose [cab727d4]"
                }]
            }
        }
    }
    
    responce = requests.post(modelURL+'sdapi/v1/img2img', json=poseData)

    imgPath = []
    imageOrg = d_base64_image(image)

    imageOrg.save('../public/posePath/org.png')
    imgPath.append('/posePath/org.png')


    for i in range(len(responce.json()['images'])):
        imageTmp = d_base64_image(responce.json()['images'][i])
        imageTmp.save('../public/posePath/'+str(i)+".png")
        imgPath.append("/posePath/"+str(i)+".png")

    return jsonify({'posePath': imgPath})