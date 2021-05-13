def mine_sweeper(col, row, matrix):











col, row = map(int, input().split())

matrix = []
for i in range(row):
    matrix.append(list(input()))

mine_sweeper(col, row, matrix)