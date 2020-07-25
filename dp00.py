def rob(nums):
    odd_sum = 0
    even_sum = 0

    for i in range(len(nums)):
        if i % 2 == 0:
            print("even_sum:",even_sum)
            print("nums[i]:",nums[i])
            print("even_sum+nums[i]: ",even_sum+nums[i])
            print("odd_sum: ",odd_sum)
            print("------------")
            even_sum = max(even_sum+nums[i],odd_sum)
        else:
            print("even_sum: ",even_sum)
            print("odd_sum:",odd_sum)
            print("nums[i]:",nums[i])
            print("odd_sum+nums[i]: ",odd_sum+nums[i])
            print("------------")
            odd_sum = max(even_sum,odd_sum+nums[i])
    
    return max(even_sum,odd_sum)

print(rob([0,1,5,3,1,1]))