def insertion_sort(list):
    print('Before Sort: '+str(list))
    for i in range(len(list)):
        current = list[i]
        j = i - 1
        
        while j >= 0 and list[j] > current:
            list[j+1] = list[j]
            j = j - 1
        
        list[j+1] = current
    
    print('After Sort: '+str(list))

insertion_sort([2,4,1,3,6,5])

#insertion sort in Python