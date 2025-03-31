""" How many double digits? """

'''Bob works for Yamazon as a barcode scanning specialist. Every day, armed with his trusty laser, his job is to scan barcodes of packages as they pass in front of him on a conveyor belt.

One day, his boss Beff Jezos tells him "There's been a big mixup with the new barcodes. We forgot to count every bardcode that had a repeating digit. Now we are short boxes but we dont know how many to order. I need you to hand count every barcode that has a double digit."

Yamazon barcodes are very long. Bob knows there are more labels to count then he has time in his life. Is there a way to keep his sanity and his job?'''

def number_of_duplicate_digits(ndigit):
    count = 0
    for num in range(10**(ndigit-1), 10**ndigit):
        string = str(num)
        for st in range(len(string)-1):
            if string[st] == string[st+1]:
                count +=1
                break
    return count