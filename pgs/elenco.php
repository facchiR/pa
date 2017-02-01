<?php
        
	$table='pressione';
	$record=(empty($_REQUEST['id'])) ?  R::dispense($table) : R::load($table, intval($_REQUEST['id']));	
	try {
		if ($record && !empty($_REQUEST['act']) && $_REQUEST['act']=='del') R::trash($record);
                
                $validData = (intval($_POST['diastolica']) > intval($_POST['sistolica']));
                $errorMessage = !empty($_POST['datamisurazione']) && !$validData?
                        "Diastolica deve essere superiore alla sistolica!":"";
                //die(print_r($validData?1:0,1));
		if (!empty($_POST['datamisurazione']) && $validData )
                {
                    // se non soddisfo i req input non aggiornare
                    //die(print_r($validData?1:0,1));
			foreach ($_POST as $k=>$v){
				$record[$k]=$_POST[$k];
			}
			R::store($record);
                        
//                    if(($i->sistolica) <= ($i->diastolica)){
//                        foreach ($_POST as $k=>$v){
//				$record[$k]=$_POST[$k];
//			}
//			R::store($record);
//                    }else{
//                        foreach ($_POST as $k=>$v){
//				$record[$k]=$_POST[$k];
//			}
//			R::trash($record);
//                    }
		}
	} catch (RedBeanPHP\RedException\SQL $e) {
		?>
		<h4 class="msg label error">
			<?=$e->getMessage()?>
		</h4>
		<?php
	}	
	$pa=R::find($table);
?>
<h2>
	<a href="index.php">
		Misurazioni
	</a>
        <strong><?php echo $errorMessage; ?></strong>
</h2>
<form action="?p=elenco" method="POST">
	<caption>Nuova misurazione:</caption>
	<input type="date" name="datamisurazione" value="<?=date('Y-m-d');?>" placeholder="data" required />
	<input type="number" name="sistolica" placeholder="sistolica" required />
	<input type="number" name="diastolica" placeholder="diastolica" required />	
	<input type="number" name="peso" placeholder="peso" required />	
	<button type="submit">Salva</button>
</form>
<table border="1">
	<thead>
		<tr>
			<th>
				Data misurazione
			</th>
			<th>
				Sistolica
			</th>		
			<th>
				Diastolica
			</th>
			<th>
				Peso
			</th>
			<th>
				&nbsp;
			</th>			
		</tr>
	</thead>
	<tbody>
	<?php foreach ($pa as $i) : ?>
		<tr>
			<td>
				<?=$i->datamisurazione?>
			</td> 
			<td>
				<?=$i->sistolica?> 
			</td> 
			<td>
				<?=$i->diastolica?>
			</td>
			<td>
				<?=$i->peso?>
			</td>
			<td>
				<a href="?p=elenco&act=del&id=<?=$i->id?>" title="elimina questa rilevazione">x</a>
			</td>			
		</tr>
	<?php endforeach; ?>
	</tbody>
</table>