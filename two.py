import json
# w=open("data.json","w")
# d=[
#     {"name":"vishva","age":22},
#     {"name":"krithiv","age":22},
#     {"name":"rupak","age":25}
# ]
# val=json.dumps(d)
# w.write(val)
# print("wrriten")
f=open("data.json","r")
val=f.read()
data=json.loads(val)
# print(data)
a=0
for i in range(len(data)):
    # if data[i]["name"]=="krithiv":
    #     data[i]["age"]=30

    # if i==1:
    #     data[1]["age"]=26

    # if i==0:
    #     data.pop(0)

    if data[i]["name"]=="krithiv":
        a=a+i

data.pop(a)

print(data)
        