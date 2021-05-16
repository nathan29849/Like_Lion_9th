n, m = map(int, input().split())


# divisor = set()

# if m % n == 0:
#     for i in range(1, n+1):
#         if n % i == 0:
#             divisor.add(i)
# else: # m % n != 0
#     for j in range(1, n+1):
#         if m % i == 0 and n % i == 0:
#             divisor.add(i)
a = {i for i in range(1, n+1) if n % i == 0}
b = {i for i in range(1, m+1) if m % i == 0}

divisor = a & b
print(a, b)
print(divisor)

result = 0
if type(divisor) == set:
    result = sum(divisor)

print(result)

