import time	

def tarkastatiedosto():
  try:
    tiedostonimi = "muistio.txt"
    tiedosto = open(tiedostonimi, "r")
    tiedosto.close()
    return tiedostonimi
  except IOError:
    print("Oletusmuistioa ei löydy, luodaan tiedosto.")
    tiedosto = open("muistio.txt", "w")
    tiedosto.close
    return tiedostonimi

def vaihdatiedosto():
  try:
    tiedostonimi = input("Anna tiedoston nimi:")
    tiedosto = open(tiedostonimi, "r")
    return tiedostonimi
  except IOError:
    print("Tiedostoa ei löydy, luodaan tiedosto.")
    tiedosto = open(tiedostonimi, "w")
    tiedosto.close
    return tiedostonimi


def main():

  muistio = tarkastatiedosto()
  jatkuu = True

  while jatkuu:
    print("Käytetään muistiota:",muistio)
    print("(1) Lue muistikirjaa")
    print("(2) Lisää merkintä")
    print("(3) Tyhjennä muistikirja")
    print("(4) Vaihda muistiota")
    print("(5) Lopeta")
      
    operaattori = input("Mitä haluat tehdä?: ")
    
    
    if(operaattori == "1"):
      luku = open(muistio,"r")
      toiminto = luku.readlines()
      for i in toiminto:
        print(i)
      luku.close()
      continue
    elif (operaattori == "2"):
      lisays = open(muistio,"a")
      toiminto = input("Kirjoita uusi merkintä: ")
      viesti = toiminto + ":::" + time.strftime("%X %x") + "\n"
      lisays.write(viesti)
      lisays.close()
      continue
    elif (operaattori == "3"):
      lisays = open(muistio,"w")
      lisays.close()
      print("Muistio tyhjennetty.")
      continue
    elif (operaattori == "4"):
      muistio = vaihdatiedosto()
      continue
    elif (operaattori == "5"):
      print("lopetetaan.")
      break
    
if __name__ == "__main__":
    main()
