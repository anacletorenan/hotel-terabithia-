var confirmar;
function hotel(){
    var sair = false;
    alert("Seja bem vinda(o) ao Terabithia Hotel!!");
    var nome = transformarMaiuscula(prompt("Informe seu nome:"));
    do{
        var senha = prompt("Olá, " + nome + " informe sua senha");
        if(isNaN(senha))
            alert("a senha deve ser numérica");
        else if(senha.length > 4)
            alert("a senha possui somente 4 digítos");
        else if(senha != 2678)
            alert("Senha errada, a senha é: 2678");
    }while(senha != 2678);
    do{
        var escolha = prompt("Funções do Terabithia Hotel\n1 - Quanto quartos são?\n2 - Como soletra?\n3 - Com \"S\" ou com\"Z\"?\n4 - Que horas você pode?\n5 - Álcool ou gasolina?\n6 - Ar puro, finalmente\n 7 - Sair");
        switch(escolha){
            case "1":
                var quartos = [], nomeHospede = [], count = 0, valorTotal = [], dias = [], valor;
                do{
                    do{
                        valor = parseFloat(prompt("Informe o valor da diária: "));
                        if(isNaN(valor))
                            alert("Por favor digite um número.");
                        else if(valor <= 0)
                            alert("Valor informado é invalido!");
                    }while(valor <= 0 || isNaN(valor))
                    do{
                        dias[count] = parseInt(prompt("Por favor informe a quantidade de dias que ficara no quarto."));
                        if(isNaN(dias[count]))
                            alert("Por favor digite um número.");
                        else if(dias[count] <= 0 || dias[count] > 30)
                            alert("Valor informado é invalido!");
                    }while(dias[count] <= 0 || dias[count] > 30 || isNaN(dias[count]));
                    valorTotal[count] = valor * dias[count];
                    alert("O valor de " + dias[count] + " diárias é de R$" + valorTotal[count])
                    do{
                        nomeHospede[count] = transformarMaiuscula(prompt("Qual o nome do hóspede?"));
                        if(nomeHospede[count] === "")
                            alert("Por favor não deixe o campo vazio.");
                    }while(nomeHospede[count] === "");  
                    do{
                        var quarto = parseInt(prompt("Qual quarto voce deseja? (1-20)"));
                        if(isNaN(quarto))
                            alert("O valor deve ser um numero");
                        else if(quarto <= 0 || quarto >= 21 )
                            alert("Quarto inexitente, por favor selecione outro.");
                        else if(quartos.includes(quarto))
                            alert("Quarto vago, por favor selecione outro.");
                        else{
                            quartos[count] = quarto;
                            break;
                        }
                    }while(isNaN(quarto) || quarto <= 0 || quarto >= 21 || quartos.includes(quarto));
                    confirmar = confirm( nome + ", deseja confirmar a hospedagem da(o) " + nomeHospede[count] + " por " + dias[count] + " dias no quarto " + quartos[count] + " por R$" + valorTotal[count] + "?");
                    count++;
                    if(!confirmar)
                        count--;
                }while(confirmar);
                break;
            case "2":
                var valor = 0, gratuidade = 0, meia = 0, somaPagantes = 0, hospede = "", hospedeContagem = 0;
                do{
                    valor = parseFloat(prompt("Adicione o valor da reserva: "));
                    if(isNaN(valor))
                        alert("Adicione um número.");
                    else if(valor <= 0)
                        alert("O valor informado não pode ser negativo ou zerado.");
                }while(isNaN(valor) || valor <= 0);
                do{
                    hospede = transformarMaiuscula(prompt("Informe o nome do hóspede:(digite PARE para sair da função)"));
                    if(hospede === "")
                        alert("Não é permitido deixar o campo vazio.");
                    else if(hospede == "PARE")
                        break;
                    else{
                        do{
                            idade = parseInt(prompt("Adicione a idade do hóspede."));
                            if(isNaN(idade))
                                alert("Idade inválida!")
                        }while(idade <= 0 || isNaN(idade))
                        hospedeContagem += 1;
                        if(idade <= 6){
                            gratuidade += 1;
                            alert(hospede + " cadastrada(o) com sucesso. " + hospede + " possui gratuidade.");
                        }
                        else if(idade >= 60){
                            meia += 1;
                            somaPagantes += (valor/2);
                            alert(hospede + " cadastrada(o) com sucesso. " + hospede + " pagará meia.");
                        }
                        else{
                            somaPagantes += valor;
                            alert(hospede + " cadastrada(o) com sucesso.");
                        }
                    }
                }while(hospede !== "PARE" || hospede === "");
                alert(nome + ", o valor total das hospedagens é de R$" + somaPagantes + ". Possuindo " + hospedeContagem + " hóspedes, onde " + meia + " pagam meia e " + gratuidade + " tem gratuidade.");
                break;
            case "3":
                var hospedes = [], escolha = "", hospede = "";
                do{
                    escolha = prompt("Faça sua escolha \n1 - Cadastrar hóspedes\n2 - Pesquisar hóspede\n3 - Listar hóspedes\n4 - Sair");
                    switch(escolha){
                        case "1":
                            if(hospedes.length < 15){
                                hospede = "\n";
                                do{
                                    hospede += transformarMaiuscula(prompt("Adicione o nome do hóspede."));
                                    if(hospede === "")
                                        alert("Por favor preencha o campo!")
                                }while(hospede === "");
                                hospedes.push(hospede);
                                alert("Hóspede cadastrado com sucesso.")
                            }else
                                alert("O limite de hóspedes foi atingido!")
                            break;
                        case "2":
                            hospede = "\n";
                            hospede += transformarMaiuscula(prompt("Informe o hóspede para busca."));
                            if(hospedes.includes(hospede))
                                alert(hospede + " foi encontrada(o) no sistema.");
                            else
                                alert("Hóspede não cadastrado no sistema!")
                            break;
                        case "3":
                            alert("HÓSPEDES CADASTRADOS" + hospedes);
                            break;
                        case "4":
                            break;
                        default:
                            alert("Por favor selecione uma das opções.");
                            break;
                    }
                }while(escolha !== "4")
                break;
            case "4":
                var convidados = 0, cadeiras = 0, diaSemana = "", horario = 0, nomeEmpresa = "", garcom = 0, limiteEvento = 0, horaEvento = 0, valorGarcom = 0, cafe = 0, agua = 0, salgado = 0, valorCafe = 0, valorAgua = 0, valorsalgado = 0, valorBuffet, count = 0, confirmar = null,  auditorio = "";
                do{
                    convidados = parseInt(prompt("Adicione a quantidade de convidados."));
                    if(isNaN(convidados))
                        alert("Por favor aidicione números.");
                    else if(convidados <=0)
                        alert("Quantidade de convidados inválida!");
                    else if(convidados > 350)
                        alert("Quantidade de convidade superior a quantidade permitida!")
                    else if(convidados <= 150){
                        auditorio = "laranja";
                        alert("Use o auditório " + auditorio + ".");
                        alert("Agora vamos agendar o evento.");
                    }else if(convidados > 150 && convidados <= 220){
                        cadeiras = convidados - 150;
                        auditorio = "laranja";
                        alert("Use o auditório " + auditorio + ".(Adicione " + cadeiras + " cadeiras)");
                        alert("Agora vamos agendar o evento.");
                    }
                    else{
                        auditorio = "colorado";
                        alert("Use o auditório " + auditorio + ".");
                        alert("Agora vamos agendar o evento.");
                    }
                }while(isNaN(convidados) || convidados <= 0 || convidados > 350);
                do{
                    diaSemana = transformarMaiuscula(prompt("Em qual dia da semana ocorrera o evento?(Não informe o -feira. Exemplo: \" terca\")"));
                    switch(diaSemana){
                        case "Segunda":
                        case "Terca":
                        case "Terça":
                        case "Quarta":
                        case "Quinta":
                        case "Sexta":
                            limiteEvento = 23;
                            do{
                                horario = parseInt(prompt("Informe o horário do evento."))
                                if(isNaN(horario))
                                    alert("Informe o horário em números!");
                                else if(horario < 0 || horario > 24)
                                    alert("Horário inexistente!")
                                else if(horario < 7 || horario > 23)
                                    alert("Não funcionamos nesse horário!");
                            }while(horario < 7 || horario > 23 || isNaN(horario));
                            do{
                                nomeEmpresa = prompt("Qual o nome da empresa?");
                            }while(nomeEmpresa === "");
                            count = 1;
                            alert("Auditório reservado para " + nomeEmpresa + ". " + diaSemana + " às " + horario + "h.")
                            break;
                        case "Sabado":
                        case "Sábado":
                        case "Domingo":
                            limiteEvento = 15;
                            do{
                                horario = parseInt(prompt("Informe o horário do evento."))
                                if(isNaN(horario))
                                    alert("Informe o horário em números!");
                                else if(horario < 0 || horario > 24)
                                    alert("Horário inexistente!")
                                else if(horario < 7 || horario > 15)
                                    alert("Não funcionamos nesse horário!");
                            }while(horario < 7 || horario > 15 || isNaN(horario));
                            do{
                                nomeEmpresa = prompt("Qual o nome da empresa?");
                            }while(nomeEmpresa === "");
                            alert("Auditório reservado para " + nomeEmpresa + ". " + diaSemana + " às " + horario + "h.")
                            count = 1;
                            break;
                        default:
                            alert("Dia da semana informado não existe!");                
                    }
                }while(count == 0)
                do{
                    horaEvento = parseInt(prompt("Qual será a duração do evento em horas?"));
                    var limite = horario + horaEvento;
                    if(isNaN(horaEvento))
                        alert("Adicione a hora em número!");
                    else if(horaEvento <= 0)
                        alert("Quantidade de horas inválidas!");
                    else if(limite > limiteEvento)
                        alert("Não trabalhamos mais que o nosso horário!");
                }while(isNaN(horaEvento) || horaEvento <= 0 || limite > limiteEvento);
                garcom = Math.ceil(convidados / 12);
                garcom += Math.ceil(horaEvento / 2);
                valorGarcom = horaEvento * 10.50 * garcom;
                alert("Serão necessarios " + garcom + " garçons, o custo será de R$" + valorGarcom + ".");
                alert("Agora vamos calcular o buffet.");
                cafe = Math.ceil(0.2 * convidados);
                agua = Math.ceil(0.5 * convidados);
                salgado = Math.ceil(7 * convidados / 100) * 100;
                valorCafe = cafe * 0.8;
                valorAgua = agua * 0.4;
                valorsalgado = salgado / 100 * 34;
                valorBuffet = valorAgua + valorCafe + valorsalgado;
                valorTotal = valorGarcom + valorBuffet;
                alert("O evento precisará de " + cafe + "L de café, " + agua + "L de água e " + salgado + " unidades de salgados.");
                confirmar = confirm("DADOS PARA FINALIZAR RESERVA\n Evento no Auditório: " + auditorio + "\nNome da Empresa: " + nomeEmpresa + "\nData: " + diaSemana + ", " + horario + "h às " + limite + "\nDuração do Evento: " + horaEvento + "h\nQuantidade de Garçons: " + garcom + "\nQuantidade de Convidados: " + convidados + "\n\n Custo dos garçons: R$ " + valorGarcom + "\nCusto do buffet: R$ " + valorBuffet + "\n\nValor total do Evento: R$" + valorTotal);
                if(confirmar)
                    alert(nome + ", reserva efetuada com sucesso.");
                else
                    alert("Reserva não efetuada, voltando ao menu do sistema.")
                break;
            case "5":
                var postoWayneAlcool = 0, postoWayneGasolina = 0, postoStarkGasolina = 0, postoStarkAlcool = 0, diferenca = 0;
                do{
                    postoWayneAlcool = parseFloat(prompt("Adicione o valor do álcool no posto Wayne Oil."));
                    if(isNaN(postoWayneAlcool))
                        alert("Porfavor informe em número!");
                    else if(postoWayneAlcool <= 0)
                        alert("Valor informado não pode ser igual ou menor a 0.");
                }while(isNaN(postoWayneAlcool) || postoWayneAlcool <= 0);
                do{
                    postoWayneGasolina = parseFloat(prompt("Adicione o valor da gasolina no posto Wayne Oil."));
                    if(isNaN(postoWayneGasolina))
                        alert("Porfavor informe em número.");
                    else if(postoWayneGasolina <= 0)
                        alert("Valor informado não pode ser igual ou menor a 0.");
                }while(isNaN(postoWayneGasolina) || postoWayneGasolina <= 0);
                do{
                    postoStarkAlcool = parseFloat(prompt("Adicione o valor do álcool no posto Stark Petrol."));
                    if(isNaN(postoStarkAlcool))
                        alert("Porfavor informe em número");
                    else if(postoStarkAlcool <= 0)
                        alert("Valor informado não pode ser igual ou menor a 0.");
                }while(isNaN(postoStarkAlcool) || postoStarkAlcool <= 0);
                do{
                    postoStarkGasolina = parseFloat(prompt("Adicione o valor do gasolina no posto Stark Petrol."));
                    if(isNaN(postoStarkGasolina))
                        alert("Porfavor informe em número.");
                    else if(postoStarkGasolina <= 0)
                        alert("Valor informado não pode ser igual ou menor a 0.");
                }while(isNaN(postoStarkGasolina) || postoStarkGasolina <= 0);
                if(postoWayneGasolina <= postoStarkGasolina){
                    diferenca = postoWayneGasolina - postoWayneGasolina * 0.3;
                    if(postoWayneAlcool <= diferenca)
                        alert(nome + ", é mais barato abastecer com álcool no posto Wayne Oil.");
                    else
                        alert(nome + ", é mais barato abastecer com gasolina no posto Wayne Oil.");
                }else{
                    diferenca = postoStarkGasolina - postoStarkGasolina * 0.3;
                    if(postoStarkAlcool < diferenca)
                        alert(nome + ", é mais barato abastecer com álcool no posto Stark Petrol.");
                    else
                        alert(nome + ", é mais barato abastecer com gasolina no posto Stark Petrol.");
                }
                break;
            case "6":
                var empresas = [], valor = [], valorFinal = [], quantidade = [], quantidadeMinima = [], desconto = [], confirmar = null, i = -1, barato = 1000000000000000000, j = 0;
                do{
                    i ++;
                    do{
                        empresas[i] = transformarMaiuscula(prompt("Adicione o nome da empresa."));
                        if(empresas[i] === "")
                            alert("Não deixe o espaço em branco!");
                    }while(empresas[i] === "");
                    do{
                        valor[i] = parseFloat(prompt("Qual o valor por aparelhos?"));
                        if(isNaN(valor[i]))
                            alert("Por favor informe números.");
                        else if(valor[i] <= 0)
                        alert("O valor não pode ser 0 ou abaixo dele!");
                    }while(isNaN(valor[i]) || valor[i] <= 0);
                    do{
                        quantidade[i] = parseInt(prompt("Qual a quantidade de aparelhos?"));
                        if(isNaN(quantidade[i]))
                            alert("Por favor informe números.");
                        else if(quantidade[i] <= 0)
                        alert("A quantidade não pode ser 0 ou abaixo dele!");
                    }while(isNaN(quantidade[i]) || quantidade[i] <= 0);
                    do{
                        desconto[i] = parseInt(prompt("Qual a porcentagem de desconto?"));
                        if(isNaN(desconto[i]))
                            alert("Por favor informe números.");
                        else if(desconto[i] < 0)
                        alert("O desconto não pode ser abaixo de 0.");
                    }while(isNaN(desconto[i]) || desconto[i] < 0);
                    do{
                        quantidadeMinima[i] = parseInt(prompt("Qual a quantidade mínima de aparelhos para o desconto?"));
                        if(isNaN(quantidadeMinima[i]))
                            alert("Por favor informe números.");
                        else if(quantidadeMinima[i] < 0)
                        alert("A quantidade mínima exigida não pode ser negativa!");
                    }while(isNaN(quantidadeMinima[i]) || quantidadeMinima[i] < 0);
                    if(quantidade[i] >= quantidadeMinima[i])
                        valorFinal[i] = valor[i] * quantidade[i] - desconto[i] / 100 * valor[i] * quantidade[i];
                    else
                        valorFinal[i] = quantidade[i] * valor[i];
                    alert("O serviço da " + empresas[i] + " custará R$ " + valorFinal[i]);
                    if(barato > valorFinal[i]){
                        barato = valorFinal[i];
                        j = i;
                    }
                    confirmar = confirm("Deseja checar novas empresas?");
                }while(confirmar);
                alert("O orçamento mais barato é o da " + empresas[j] + " que saiu por R$ " + barato);
                break;
            case "7":
                alert(nome + ", foi um prazer ter você no nosso Hotel, esperamos que nos utilize novamente em algum outro momento\n\nAtt: Terabithia Hotel")
                sair = true;
                break;
            default:
                alert("Escolha inválida, por favor selecione um dos valores informados.")
                break;
        }
    }while(sair === false)
}
alert("Muito obrigado e até logo, " + nome + ".");
function transformarMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};