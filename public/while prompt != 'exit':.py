 while prompt != 'exit':
    prompt = input("Prompt > ")
    text = loaded_index.query(prompt)
    text2=str(text)
    last_period_index = text2.rfind(".")
    text2 = text2[:last_period_index+1]
    print(text2)