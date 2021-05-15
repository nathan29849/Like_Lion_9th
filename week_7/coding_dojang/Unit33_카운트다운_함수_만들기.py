def countdown(n):
    count = n+1

    def sub():
        nonlocal count
        count -= 1
        return count

    return sub



n = int(input())
 
c = countdown(n)
for i in range(n):
    print(c(), end=' ')