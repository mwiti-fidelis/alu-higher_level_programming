#!/usr/bin/python3
def max_integer(my_list=[]):
    if len(my_list) > 0:
        sorted_list = sorted(my_list, reverse=True)
        max_value = sorted_list[0]
        print("Max: {}".format(max_value))
    else:
         return None
        break
