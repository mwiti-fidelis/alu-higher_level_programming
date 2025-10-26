#!/usr/bin/python3
def divisible_by_2(my_list=[]):
    results = []
    for i in range(len(my_list)):
        if i % 2 == 0:
            results.append(True)
        else:
            results.append(False)
     return results
        

