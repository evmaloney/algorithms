# Convert a given number to binary (w/o built in methods)

# My original rough solution
def build_binary(num, exp, binary_str = ""):
    if exp < 0:
        return int(binary_str)
    
    curr_factorial = 2 ** exp
    
    if num - curr_factorial >= 0:
        binary_str += "1"
        num -= curr_factorial
    else:
        binary_str += "0"
        
    return build_binary(num, exp - 1, binary_str)


def to_binary(num):
    curr_exponent = 0
    next_exponent = 0
    result = 0
    
    while result <= num:
        curr_exponent = next_exponent
        next_exponent += 1
        result = 2 ** next_exponent
        
    return build_binary(num, curr_exponent)

solution = to_binary(34)
print(solution)