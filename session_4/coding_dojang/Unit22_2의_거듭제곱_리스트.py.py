n, m = map(int, input().split())

arr = []
for i in range(n, m+1):
    arr.append(2**i)


arr.pop(1)
arr.pop(-2)

print(arr)