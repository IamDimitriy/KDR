from time import sleep
print ('Добро пожаловать в текстовый симулятор биения сердечка!')
sos_toiayie = input ('Все норм?')
q = 'тук-тук'
i = 1
eche = True
while eche :
    if sos_toiayie == 'да' or sos_toiayie == 'yes':
        print ('Тогда Ваше сердце бьется следующим образом:')
        for i in range (1, 73) :
            sleep(0.857142)
            print (q)
            eche = False
    elif sos_toiayie == 'нет, я скоропостижнулся уже':
        print ('Тогда Ваше сердце бьется следующим образом:')
        print ('...')
        eche = False
    else:
        print ('не судьба)')
        break
        
