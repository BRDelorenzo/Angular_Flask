from flask import Flask,request
from flask_restful import Api,Resource,reqparse
from models import ProductModel, db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

api = Api(app)
db.init_app(app)

@app.before_request
def create_table():
    db.create_all()


class contratosView(Resource):


    def get(self):
        contratos = ProductModel.query.all()
        return {'Contratos':list(x.json() for x in contratos)}
    def post(self):
        data = request.get_json()
        new_contrato = ProductModel(data['Contrato'],data['dtInicio'])
        db.session.add(new_contrato)
        db.session.commit()
        db.session.flush()
        return new_contrato.json,201
    
class ContratoUnico(Resource):

    def get(self,id):
        contratoID = ProductModel.query.filter_by(id = id).first()
        if contratoID:
            return contratoID.json()
        return {'message':'ID do Contrato não encontrado'},404

    def delete(self,id):
        contratoID = ProductModel.query.filter_by(id = id).first()
        if contratoID:
            db.session.delete(contratoID)
            db.session.commit()
            return{'message':'Deleted'}
        else:
            return{'message':'Product not found'},404
    
    def put(self,id):
        data = request.get_json()
        contrato = ProductModel.query.filter_by(id = id).first()

        if contrato:
            contrato.Contrato = data["Contrato"]
            contrato.dtInicio = data["dtInicio"]
        
        else:
            contrato = ProductModel(id=id,**data)
        
        db.session.add(contrato)
        db.session.commit()
        return contrato.json

api.add_resource(contratosView,'/contratos')
api.add_resource(ContratoUnico,'/contrato/<int:id>')

app.debug = True
if __name__ == '__main__':
    app.run(host='localhost', port=5000)
