
tupleItem = (2,4, "Hello")

print(type(tupleItem))

print(tupleItem)

tupleList = list(tupleItem)

print(tupleItem)

tupleList.append(1)
tupleList.append('Harret')
tupleList.append({'John': 'employed'})

print('********Items in a list**************')
print(tupleList)

tupleItem = tuple(tupleList)
print('*********Items in a tuple**********')
print(tupleItem)