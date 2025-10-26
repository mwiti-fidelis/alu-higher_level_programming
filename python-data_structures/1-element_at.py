#!/usr/bin/python3
def element_at(my_list, idx):
    
    print(my_list)

    if (idx > len(my_list) - 1):
        print ("None")
    elif (idx < 0 ):
        print("None")
    else
        print("Element at index {:d} is {}".format(idx, element_at(my_list, idx)))
