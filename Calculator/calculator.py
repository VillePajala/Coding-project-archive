import math


def luvuntarkastaja():
    while True:
        try:
            lukuarvo = input("Anna luku: ")
            lukuarvo = int(lukuarvo)
            return lukuarvo
        except (TypeError, ValueError):
            print("virheellinen syöte!")
                  

def main():

    luku1 = luvuntarkastaja()   
    luku2 = luvuntarkastaja()
    
    jatkuu = True
    while jatkuu:
        
        print("(1) +")
        print("(2) -")
        print("(3) *")
        print("(4) /")
        print("(5) sin(luku1/luku2)")
        print("(6) cos(luku1/luku2)")
        print("(7) Vaihda luvut")
        print("(8) Lopeta")
        print("Valitut luvut: ",luku1, luku2)
        operaattori = input("Tee valinta (1-8): ")
        

        if(operaattori == "1"):
            print("Tulos on: ",luku1+luku2)
            continue
        elif (operaattori == "2"):
            print("Tulos on: ",luku1-luku2)
            continue
        elif (operaattori == "3"):
            print("Tulos on: ",luku1*luku2)
            continue
        elif (operaattori == "4"):
            print("Tulos on: ",luku1/luku2)
            continue
        elif (operaattori == "5"):
            print("Tulos on: ",math.sin(luku1 / luku2))
            continue
        elif (operaattori == "6"):
            print("Tulos on: ",math.cos(luku1 / luku2))
            continue
        elif (operaattori == "7"):
            luku1 = luvuntarkastaja()   
            luku2 = luvuntarkastaja()
            continue
        elif (operaattori == "8"):
            break
    
if __name__ == "__main__":
    main()
