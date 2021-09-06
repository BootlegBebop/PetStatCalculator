            function calc()
            {
                var Strength = parseFloat(document.getElementById('Strength').value);
                var Intellect = parseFloat(document.getElementById('Intellect').value);
                var Agility = parseFloat(document.getElementById('Agility').value);
                var Will = parseFloat(document.getElementById('Will').value);
                var Power = parseFloat(document.getElementById('Power').value);

                
                var oper = document.getElementById('operators').value;
                
                if(oper === 'calculate')
                    {
                        document.getElementById('Dealer').value=(2*Strength+2*Will+Power)*3/400 + '%';
                    }

                if(oper === 'calculate')
                    {
                        document.getElementById('Pain Giver').value=(2*Strength+2*Will+Power)/200 + '%';
                    }
 
                if(oper === 'calculate')
                {
                    document.getElementById('Pain Bringer').value=(2*Strength+2*Will+Power)/400 + '%';
                }

                if(oper === 'calculate')
                    {
                        document.getElementById('Spell Proof').value=(2*Strength+2*Agility+Power)/125 + '%';
                    }

                if(oper === 'calculate')
                    {
                        document.getElementById('Spell Defy').value=(2*Strength+2*Agility+Power)/250 + '%';
                    }

                if(oper === 'calculate')
                    {
                        document.getElementById('Ward').value=(2*Strength+2*Agility+Power)*3/250 + '%';
                    }
            }