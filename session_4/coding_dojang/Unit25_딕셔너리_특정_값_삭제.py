# 풀이 1
keys = input().split()
values = map(int, input().split())

x = dict(zip(keys, values))

x.pop('delta')
sample = []
for k, v in x.items():
    if v == 30:
        sample.append(k)

for i in sample:
    x.pop(i)
print(x)

# 집합은 키를 변경할 수 없음
# iteration 도중 size가 바뀌어선 안됨
# value로 key 값을 찾아낼 수는 없음

# 풀이 2
del x['delta']
A = {key: value for key, value in x.items() if value!= 30}
x = A
print(x)