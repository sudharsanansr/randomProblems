#find the second largest number in the given array

arr = [12,4,2,51,34,54,345]
largest = 0;
second_largest = 0;

for i in range(len(arr)):
    if arr[i] > largest:
        second_largest = largest
        largest = arr[i]

print(second_largest)