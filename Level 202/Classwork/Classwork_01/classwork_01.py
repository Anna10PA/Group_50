# level 202:
#    1)  შექმენით ტექსტური ფაილი ამფაილში შეინახეთ სხვადასხვა სახელები, პითონიდან წაიკითხეთ ეს ფაილი საბოლოოდ შეცვალეთ ეს ფაილი  სადაც იქნება თითოული სახელი ჩამატებული და გვერდზე ექნება მიწერილი goa 


with open('./Level 202/Classwork/Classwork_01/classwork.txt') as file:
    names = file.read()

with open('./Level 202/Classwork/Classwork_01/classwork.txt', 'w') as f:
    f.write(' '.join([name+'-goa' for name in names.split()]))