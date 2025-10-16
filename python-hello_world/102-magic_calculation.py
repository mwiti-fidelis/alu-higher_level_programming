#!/usr/bin/pyhthon3
import dis
def magic_calculation(a,b):
    print("f"{98 * a**b}")

dis.dis(magic_calculation)
