import math
num_list = [9,1,8,2,7,3,6,4,5]
num_list = sorted(num_list)

def findMedian(arr):
    if(len(arr) == 0):
        return
    elif(len(arr) == 1):
        return arr[0]
    else:
        for i in range(math.floor(len(arr) / 2)):
            print('i: '+str(i))

findMedian(num_list)